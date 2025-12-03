import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapPin, Send, ChevronLeft, ChevronRight, ShoppingBag, Utensils, Tag, HelpCircle, Search, Clock, X, Gift, CheckCircle, ExternalLink, Copy, Check, Eye, Sparkles, Map as MapIcon, CreditCard, Smartphone, Wallet, AlertCircle } from 'lucide-react';
import { Store, TicketData, StoreItem } from './types';
import { CafeDeMatteLogo } from './Logo';
import { rawStoresData } from './stores';

// Extend window interface for Leaflet
declare global {
  interface Window {
    L: any;
  }
}

// Ticket QR Code Component (SVG)
const TicketQR = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" style={{maxWidth: '140px', display: 'block', margin: '0 auto'}}>
    <rect x="0" y="0" width="100" height="100" fill="white" />
    <path fill="var(--text-main)" d="M10,10 h20 v20 h-20 z M15,15 v10 h10 v-10 z" />
    <path fill="var(--text-main)" d="M70,10 h20 v20 h-20 z M75,15 v10 h10 v-10 z" />
    <path fill="var(--text-main)" d="M10,70 h20 v20 h-20 z M15,75 v10 h10 v-10 z" />
    <path fill="var(--text-main)" d="M40,10 h10 v10 h-10 z M60,10 h5 v5 h-5 z M45,25 h5 v5 h-5 z M35,15 h5 v5 h-5 z" />
    <path fill="var(--text-main)" d="M40,40 h20 v20 h-20 z M45,45 v10 h10 v-10 z" />
    <path fill="var(--text-main)" d="M70,40 h10 v10 h-10 z M85,45 h5 v5 h-5 z M75,55 h5 v5 h-5 z" />
    <path fill="var(--text-main)" d="M40,70 h5 v5 h-5 z M50,70 h10 v10 h-10 z M65,70 h5 v5 h-5 z" />
    <path fill="var(--text-main)" d="M70,70 h20 v20 h-20 z M75,75 h5 v5 h-5 z M85,80 h5 v5 h-5 z" />
    <path fill="var(--text-main)" d="M10,40 h5 v5 h-5 z M25,40 h5 v5 h-5 z M15,50 h10 v10 h-10 z" />
  </svg>
);

// Data Processing
const processStores = (data: any[]): Record<string, Store[]> => {
    const storesByArea: Record<string, Store[]> = {};
    data.forEach((raw: any, index: number) => {
        const areaName = raw.region || raw.station;
        if (!areaName || !raw.coordinates) return;
        
        // 1. Create initial items
        const menuItems: StoreItem[] = (raw.menu || []).map((m: any, i: number) => ({
            id: `${raw.id}-m-${i}`,
            name: m.name,
            price: Number(m.price),
            discountPrice: m.discountPrice ? Number(m.discountPrice) : undefined,
            appliedCoupon: m.appliedCoupon,
            emoji: m.emoji || '☕',
            description: m.description || '',
            category: m.category || 'Other'
        }));

        // 2. Apply coupons logic
        if (raw.coupons && raw.coupons.length > 0) {
            raw.coupons.forEach((c: any) => {
                const discount = c.discount;
                const couponName = c.name;
                
                menuItems.forEach(item => {
                    // Skip if already has a hardcoded discount or previous coupon applied
                    if (item.discountPrice) return;

                    let isMatch = false;
                    const itemName = item.name;
                    const cat = item.category || '';

                    // Keyword matching logic
                    if (couponName.includes(itemName)) isMatch = true;
                    if (itemName.includes(couponName.replace('OFF','').replace('円','').replace('引き','').trim())) isMatch = true;

                    // Expanded heuristics for better matching with provided data
                    if (couponName.includes('ラテ') && (itemName.includes('ラテ') || itemName.includes('オレ'))) isMatch = true;
                    if (couponName.includes('コーヒー') && (itemName.includes('コーヒー') || itemName.includes('ブレンド') || itemName.includes('アメリカーノ'))) isMatch = true;
                    if (couponName.includes('ティー') && (itemName.includes('ティー') || itemName.includes('紅茶') || cat === 'Tea')) isMatch = true;
                    if (couponName.includes('ドリンク') && (cat === 'Drink' || cat === 'Coffee' || cat === 'Tea')) isMatch = true;
                    if (couponName.includes('スイーツ') && (cat === 'Sweets')) isMatch = true;
                    if (couponName.includes('ケーキ') && (itemName.includes('ケーキ') || itemName.includes('タルト') || itemName.includes('シフォン'))) isMatch = true;
                    if (couponName.includes('ロール') && itemName.includes('ロール')) isMatch = true;
                    if (couponName.includes('マフィン') && itemName.includes('マフィン')) isMatch = true;
                    if (couponName.includes('スコーン') && itemName.includes('スコーン')) isMatch = true;
                    if (couponName.includes('クッキー') && itemName.includes('クッキー')) isMatch = true;
                    if (couponName.includes('サンド') && itemName.includes('サンド')) isMatch = true;
                    if (couponName.includes('セット') && (cat === 'Set')) isMatch = true;
                    if (couponName.includes('焼き菓子') && (cat === 'Sweets')) isMatch = true;

                    if (isMatch) {
                        item.discountPrice = Math.max(0, item.price - discount);
                        item.appliedCoupon = couponName; 
                    }
                });
            });
        }
        
        const store: Store = {
            id: raw.id || 10000 + index,
            name: raw.name,
            distance: typeof raw.distance === 'number' ? (raw.distance > 50 ? `徒歩${Math.ceil(raw.distance / 80)}分` : `徒歩${raw.distance}分`) : "徒歩1分",
            status: raw.status === 'busy' ? 'few' : raw.status === 'closed' ? 'full' : 'available',
            image: raw.image || '☕',
            features: raw.features || [],
            atmosphere: raw.atmosphere || "",
            menu: menuItems,
            coords: { lat: Number(raw.coordinates.lat), lng: Number(raw.coordinates.lng) },
            coupons: [] // Clear coupons so we don't display them as a list
        };

        if (!storesByArea[areaName]) storesByArea[areaName] = [];
        storesByArea[areaName].push(store);
    });

    Object.keys(storesByArea).forEach(key => {
        if (key.endsWith('駅')) {
            const shortKey = key.replace('駅', '');
            if (!storesByArea[shortKey]) storesByArea[shortKey] = storesByArea[key];
        }
    });
    return storesByArea;
};

// Banner
const TopBanner = () => {
  const [idx, setIdx] = useState(0);
  const slides = [
    { title: "加盟店募集中！", sub: "あなたのお店も「café de matté」に\n登録しませんか？", bg: "banner-bg-1", emoji: "🤝" },
    { title: "季節の限定メニュー", sub: "今しか味わえない\n桜ラテが登場🌸", bg: "banner-bg-2", emoji: "🥤" },
    { title: "アプリ限定クーポン", sub: "対象店舗で使える\n50円OFF配布中", bg: "banner-bg-3", emoji: "🎟️" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setIdx(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className={`banner-slide ${s.bg}`}>
            <div className="banner-content">
                <div className="banner-text">
                    <div className="banner-title">{s.title}</div>
                    <div className="banner-sub">{s.sub}</div>
                </div>
                <div className="banner-icon" style={{fontSize: '3rem'}}>{s.emoji}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="banner-indicators">
          {slides.map((_, i) => <div key={i} className={`banner-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} />)}
      </div>
    </div>
  );
};

const App = () => {
    const [storesData, setStoresData] = useState<Record<string, Store[]>>({});
    const [area, setArea] = useState<string | null>(null);
    const [step, setStep] = useState<number>(1);
    const [storeIdx, setStoreIdx] = useState<number>(0);
    const [item, setItem] = useState<StoreItem | null>(null);
    const [msg, setMsg] = useState<string>('');
    const [ticket, setTicket] = useState<TicketData | null>(null);
    const [shareUrl, setShareUrl] = useState<string>('');
    const [isCopied, setIsCopied] = useState(false);
    const [isPreview, setIsPreview] = useState(false);
    // Default to paypay as it is the first option
    const [paymentMethod, setPaymentMethod] = useState<string>('paypay');
    
    // Credit Card State
    const [ccNumber, setCcNumber] = useState('');
    const [ccExpiry, setCcExpiry] = useState('');
    const [ccCvc, setCcCvc] = useState('');
    const [ccName, setCcName] = useState('');
    const [paymentError, setPaymentError] = useState('');

    // Help Modal State
    const [helpOpen, setHelpOpen] = useState(false);
    const [helpStep, setHelpStep] = useState(0);
    
    // Search State
    const [searchQuery, setSearchQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [customCenter, setCustomCenter] = useState<{lat: number, lng: number} | null>(null);

    // Featured Stores
    const [featuredStores, setFeaturedStores] = useState<any[]>([]);

    const mapRef = useRef<HTMLDivElement>(null);
    const mapInst = useRef<any>(null);
    const markers = useRef<any[]>([]);
    const cardsRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    // Ticket Map Refs
    const ticketMapRef = useRef<HTMLDivElement>(null);
    const ticketMapInst = useRef<any>(null);

    useEffect(() => { 
        setStoresData(processStores(rawStoresData)); 
        const savedHistory = localStorage.getItem('search_history');
        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }

        // Check for received ticket in URL
        const params = new URLSearchParams(window.location.search);
        const ticketParam = params.get('t');
        if (ticketParam) {
            try {
                // Decode base64 to utf-8 json
                const json = decodeURIComponent(escape(atob(ticketParam)));
                const receivedTicket = JSON.parse(json);
                if (receivedTicket && receivedTicket.ticketId) {
                    setTicket(receivedTicket);
                    setStep(6); // Jump to Receiver View
                }
            } catch (e) {
                console.error("Failed to parse ticket", e);
            }
        }

        // Set featured stores (random 5)
        const shuffled = [...rawStoresData].sort(() => 0.5 - Math.random());
        setFeaturedStores(shuffled.slice(0, 5));
    }, []);
    
    const areaList = useMemo(() => Object.keys(storesData), [storesData]);

    const handleSearch = async (queryOverride?: string) => {
        const query = queryOverride || searchQuery;
        if (!query.trim()) return;
        
        // 1. Try Local Data (Exact match)
        if (storesData[query]) {
            setArea(query);
            setCustomCenter(null);
            setStep(2);
            addToHistory(query);
            return;
        }
        
        // 2. Try Local Data (Partial match)
        const match = areaList.find(a => a.includes(query));
        if (match) {
            setArea(match);
            setCustomCenter(null);
            setStep(2);
            addToHistory(match);
            return;
        }

        // 3. Fallback: External Geocoding (Nominatim)
        // If not found in our DB, try to find the location on the map anyway.
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`);
            const data = await response.json();
            
            if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lng = parseFloat(data[0].lon);
                
                setCustomCenter({ lat, lng });
                setArea(query); // Set area name to the search query even if no stores
                setStep(2);
                addToHistory(query);
            } else {
                alert('場所が見つかりませんでした。別のキーワードを試してください。');
            }
        } catch (error) {
            console.error("Geocoding failed", error);
            alert('検索中にエラーが発生しました。通信環境を確認してください。');
        }
    };

    const handleFeaturedClick = (rawStore: any) => {
        const areaName = rawStore.region || rawStore.station;
        if (!areaName || !storesData[areaName]) return;

        const targetIndex = storesData[areaName].findIndex(s => s.id === rawStore.id);
        if (targetIndex !== -1) {
            setArea(areaName);
            setCustomCenter(null);
            setStoreIdx(targetIndex);
            setStep(3); // Go directly to menu
        }
    };

    const addToHistory = (term: string) => {
        const newHistory = [term, ...searchHistory.filter(h => h !== term)].slice(0, 5);
        setSearchHistory(newHistory);
        localStorage.setItem('search_history', JSON.stringify(newHistory));
    };

    const deleteHistory = (term: string) => {
        const newHistory = searchHistory.filter(h => h !== term);
        setSearchHistory(newHistory);
        localStorage.setItem('search_history', JSON.stringify(newHistory));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Main Map Effect
    useEffect(() => {
        if (step !== 2 || !area) return;
        const stores = storesData[area] || [];
        
        const timer = setInterval(() => {
            if (window.L && mapRef.current) {
                clearInterval(timer);
                if (!mapInst.current) {
                    // Determine Center
                    let center = { lat: 35.6595, lng: 139.7004 }; // Default Tokyo
                    
                    if (customCenter) {
                        center = customCenter;
                    } else if (stores.length > 0) {
                        const targetStore = stores[storeIdx] || stores[0];
                        if (targetStore) center = targetStore.coords;
                    }
                    
                    mapInst.current = window.L.map(mapRef.current, { zoomControl: false, attributionControl: false }).setView([center.lat, center.lng], 16);
                    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapInst.current);
                } else {
                    // If map already exists (e.g. searching a new area from history without unmounting), update view
                    let center;
                    if (customCenter) {
                        center = customCenter;
                    } else if (stores.length > 0) {
                        center = stores[0].coords;
                    }
                    if (center) {
                        mapInst.current.setView([center.lat, center.lng], 16);
                    }
                }
                updateMarkers(stores);
            }
        }, 100);
        
        // Cleanup function to destroy map when leaving step 2
        return () => {
            clearInterval(timer);
            if (mapInst.current) {
                mapInst.current.remove();
                mapInst.current = null;
                markers.current = [];
            }
        };
    }, [step, area, customCenter]);

    // Ticket Map Effect (Step 6)
    useEffect(() => {
        if (step !== 6 || !ticket) return;
        const timer = setInterval(() => {
            if (window.L && ticketMapRef.current) {
                clearInterval(timer);
                // Reset map if it exists
                if (ticketMapInst.current) {
                    ticketMapInst.current.remove();
                    ticketMapInst.current = null;
                }
                
                const { lat, lng } = ticket.store.coords;
                ticketMapInst.current = window.L.map(ticketMapRef.current, { 
                    zoomControl: false, 
                    attributionControl: false,
                    dragging: false, // Static-like map
                    scrollWheelZoom: false,
                    doubleClickZoom: false,
                    touchZoom: false
                }).setView([lat, lng], 15);
                
                window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(ticketMapInst.current);
                
                const icon = window.L.divIcon({
                    className: 'custom-marker',
                    html: `<div style="background:var(--primary-dark);color:white;border:2px solid white;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 2px 5px rgba(0,0,0,0.3);">${ticket.store.image}</div>`,
                    iconSize: [40, 40],
                    iconAnchor: [20, 20]
                });
                window.L.marker([lat, lng], { icon }).addTo(ticketMapInst.current);
            }
        }, 100);
        return () => clearInterval(timer);
    }, [step, ticket]);

    useEffect(() => {
        if (step === 2 && mapInst.current && area && !customCenter) {
            const stores = storesData[area] || [];
            updateMarkers(stores);
            const target = stores[storeIdx];
            if (target) {
                mapInst.current.flyTo([target.coords.lat - 0.0015, target.coords.lng], 16, { animate: true, duration: 0.8 });
                const card = cardRefs.current[storeIdx];
                if (cardsRef.current && card) {
                    const center = cardsRef.current.offsetWidth / 2;
                    cardsRef.current.scrollTo({ left: card.offsetLeft + card.offsetWidth / 2 - center, behavior: 'smooth' });
                }
            }
        }
    }, [storeIdx, area, step, customCenter]);

    const updateMarkers = (stores: Store[]) => {
        if (!mapInst.current || !window.L) return;
        
        // Remove existing markers
        markers.current.forEach(m => m.remove());
        markers.current = [];

        // If no stores but customCenter exists, add a generic pin for the area center
        if (stores.length === 0 && customCenter) {
             const icon = window.L.divIcon({
                className: 'custom-marker',
                html: `<div style="background:var(--primary);color:white;border:2px solid white;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 5px rgba(0,0,0,0.3);"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>`,
                iconSize: [32, 32],
                iconAnchor: [16, 32]
            });
            const marker = window.L.marker([customCenter.lat, customCenter.lng], { icon }).addTo(mapInst.current);
            markers.current.push(marker);
            return;
        }

        stores.forEach((store, i) => {
            const isSelected = i === storeIdx;
            const icon = window.L.divIcon({
                className: 'custom-marker',
                html: `<div style="background:${isSelected ? 'var(--primary-dark)' : 'white'};color:${isSelected ? 'white' : 'var(--text-main)'};border:1px solid var(--border);border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:bold;box-shadow:0 2px 4px rgba(0,0,0,0.1);transition:all 0.3s;">${store.image}</div>`,
                iconSize: [36, 36],
                iconAnchor: [18, 18]
            });
            
            const marker = window.L.marker([store.coords.lat, store.coords.lng], { icon }).addTo(mapInst.current);
            marker.on('click', () => {
                setStoreIdx(i);
                setCustomCenter(null);
            });
            markers.current.push(marker);
        });
    };

    const handleCopy = () => {
        if (!shareUrl) return;
        navigator.clipboard.writeText(shareUrl).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    const handlePreview = () => {
        setStep(6);
        setIsPreview(true);
    };

    const handleProceedToPayment = () => {
        setStep(7);
        // Reset payment state when entering this step
        setPaymentError('');
    };

    const handlePaymentAndCreate = () => {
        if (paymentMethod === 'credit') {
            if (!ccNumber || !ccExpiry || !ccCvc || !ccName) {
                setPaymentError('カード情報をすべて入力してください');
                return;
            }
            // Simple mock validation (e.g., number length)
            if (ccNumber.replace(/\s/g, '').length < 13) {
                 setPaymentError('カード番号が正しくありません');
                 return;
            }
        }
        setPaymentError('');
        handleCreateTicket();
    };

    const handleCreateTicket = () => {
        if (!item || !area || !storesData[area]) return;
        const store = storesData[area][storeIdx];
        
        // Use placeholder message if input is empty
        const finalMsg = msg.trim() || "少し遅れます！これ飲んで待ってて🙏";

        const newTicket: TicketData = {
            area: { id: 1, name: area }, // simplified
            store: store,
            item: item,
            message: finalMsg,
            ticketId: Math.random().toString(36).substr(2, 9),
            timestamp: new Date().toISOString()
        };
        
        // Encode ticket data to base64 for URL
        const json = JSON.stringify(newTicket);
        const base64 = btoa(unescape(encodeURIComponent(json)));
        // Note: For GitHub Pages, we need to ensure the base path is included if we're generating a full URL
        // However, standard location.href should work if the user is already on the page.
        const url = `${window.location.origin}${window.location.pathname}?t=${base64}`;
        
        setTicket(newTicket);
        setShareUrl(url);
        setStep(5);
    };

    return (
        <>
            {step === 1 && (
                <div className="step1-container">
                    <div className="logo-header" style={{
                        // Update background image to use relative path without slash at start for safety
                        backgroundImage: "url('images/common/header-pattern.png')" 
                    }}>
                        <CafeDeMatteLogo className="logo-img" style={{fill: 'white'}} />
                        <button className="btn-help" onClick={() => { setHelpStep(0); setHelpOpen(true); }}>
                            <HelpCircle className="icon-md" />
                        </button>
                    </div>
                    
                    <div className="step1-content">
                        <TopBanner />

                        <div className="search-card">
                            <div className="search-label">待ち合わせ場所はどこですか？</div>
                            <div className="message-input-wrapper">
                                <div className={`search-box ${isSearchFocused ? 'focused' : ''}`}>
                                    <button className="search-icon-btn" onClick={() => handleSearch()}>
                                        <Search className="icon-md" />
                                    </button>                                    
                                    <input 
                                        type="text" 
                                        className="search-input" 
                                        placeholder="駅名・エリアを入力" 
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        onFocus={() => setIsSearchFocused(true)}
                                        onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                                {isSearchFocused && searchHistory.length > 0 && (
                                    <div className="history-dropdown">
                                        <div className="history-header">
                                            <Clock className="icon-sm" /> 最近の検索
                                        </div>
                                        {searchHistory.map((term, i) => (
                                            <div key={i} className="history-item" onClick={() => { setSearchQuery(term); handleSearch(term); }}>
                                                <span>{term}</span>
                                                <span className="history-delete" onClick={(e) => { e.stopPropagation(); deleteHistory(term); }}>
                                                    <X className="icon-sm" />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Featured Stores Section */}
                        <div className="featured-section">
                            <div className="section-header">
                                <div className="section-title-sm">
                                    <Sparkles className="icon-sm text-primary" />
                                    今週のピックアップ
                                </div>
                            </div>
                            <div className="featured-scroll no-scrollbar">
                                {featuredStores.map((store) => (
                                    <div key={store.id} className="featured-card" onClick={() => handleFeaturedClick(store)}>
                                        <div className="featured-img">{store.image}</div>
                                        <div className="featured-name">{store.name}</div>
                                        <div className="featured-meta">
                                            <MapPin className="icon-sm" style={{width: '0.8rem'}} />
                                            {store.region || store.station}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="step2-container">
                    <div className="map-header">
                        <button className="header-back-btn" onClick={() => setStep(1)}>
                            <ChevronLeft className="icon-lg" />
                        </button>
                        <div className="header-info">
                            <div className="header-title"><MapPin className="icon-sm" /> {area}</div>
                            <div className="header-subtitle">
                                {storesData[area || ''] ? '近くの加盟店を選択' : '地図を確認'}
                            </div>
                        </div>
                    </div>
                    
                    <div ref={mapRef} className="map-wrapper" />

                    <div className="cards-overlay">
                        {storesData[area || ''] && storesData[area || ''].length > 0 ? (
                            <div className="cards-carousel no-scrollbar" ref={cardsRef}>
                                {storesData[area || ''].map((s, i) => (
                                    <div 
                                        key={s.id} 
                                        ref={el => { cardRefs.current[i] = el; }}
                                        className={`store-card ${i === storeIdx ? 'selected' : ''}`}
                                        onClick={() => setStoreIdx(i)}
                                    >
                                        <div className="card-header">
                                            <div>
                                                <div className="font-bold text-dark" style={{fontSize:'1.1rem', marginBottom:'0.2rem'}}>{s.name}</div>
                                                <div className="text-sub" style={{fontSize:'0.8rem'}}>{s.distance} • {s.atmosphere}</div>
                                            </div>
                                            <div className="store-image">{s.image}</div>
                                            <div className={`status-badge status-${s.status}`}>
                                                {s.status === 'available' ? '空席あり' : s.status === 'few' ? '残りわずか' : '満席'}
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="tags-container">
                                                {s.features.map(f => <span key={f} className="tag">{f}</span>)}
                                            </div>
                                            <div className="card-actions">
                                                <button className="btn-menu" onClick={(e) => { e.stopPropagation(); setStoreIdx(i); setStep(3); }}>
                                                    <Utensils className="icon-sm" />
                                                    メニューを見る
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="no-store-container">
                                <div className="no-store-card">
                                    <div className="no-store-icon">
                                        <MapIcon className="icon-lg" />
                                    </div>
                                    <div className="no-store-content">
                                        <div className="no-store-title">加盟店が見つかりませんでした</div>
                                        <div className="no-store-text">このエリアにはまだ登録店舗がありません。<br />地図の位置は検索結果を表示しています。</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {step === 3 && area && storesData[area] && (
                <div className="step3-container">
                    <div className="sticky-header">
                        <button className="header-back-btn" onClick={() => setStep(2)}>
                            <ChevronLeft className="icon-lg" />
                        </button>
                        <div className="header-center font-bold">メニューを選択</div>
                    </div>
                    
                    <div className="store-hero">
                        <div className="hero-icon">{storesData[area][storeIdx].image}</div>
                        <div className="font-bold text-dark" style={{fontSize:'1.6rem', marginBottom:'0.5rem'}}>
                            {storesData[area][storeIdx].name}
                        </div>
                        <div className="hero-text">{storesData[area][storeIdx].atmosphere}</div>
                    </div>

                    <div className="menu-content">
                        <div className="section-title"><ShoppingBag className="icon-sm" /> ギフトメニュー</div>
                        <div className="menu-grid">
                            {storesData[area][storeIdx].menu.map((m) => (
                                <div key={m.id} className="menu-item" onClick={() => { setItem(m); setStep(4); }}>
                                    <div className="item-emoji-box">{m.emoji}</div>
                                    <div className="item-details">
                                        <div className="item-header">
                                            <div className="item-name">{m.name}</div>
                                            <div className="item-price">
                                                {m.discountPrice ? (
                                                    <>
                                                        <span className="text-through text-muted" style={{fontSize:'0.85rem', marginRight:'4px'}}>¥{m.price}</span>
                                                        <span className="font-bold text-danger">¥{m.discountPrice}</span>
                                                    </>
                                                ) : (
                                                    `¥${m.price}`
                                                )}
                                            </div>
                                        </div>
                                        <div className="item-desc">{m.description}</div>
                                        {m.discountPrice && (
                                            <div className="item-tag coupon-tag">
                                                <Tag style={{width:'0.7rem', height:'0.7rem', marginRight:'0.2rem'}}/> 
                                                クーポン適用済
                                            </div>
                                        )}
                                    </div>
                                    <ChevronRight className="icon-sm text-muted" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {step === 4 && item && area && storesData[area] && (
                <div className="step4-container">
                    <button className="btn-back" onClick={() => setStep(3)}>
                        <ChevronLeft className="icon-md" /> 戻る
                    </button>
                    
                    <div className="message-card">
                        <div className="font-bold text-center" style={{fontSize:'1.4rem', marginBottom:'1.5rem'}}>メッセージを添える</div>
                        
                        <div className="gift-preview">
                            <div className="gift-row">
                                <div className="gift-info">
                                    <div className="gift-emoji">{item.emoji}</div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sub" style={{fontSize:'0.9rem'}}>{storesData[area][storeIdx].name}</div>
                                    </div>
                                </div>
                                <div className="gift-price-col" style={{textAlign:'right'}}>
                                     {item.discountPrice ? (
                                        <>
                                            <div className="text-through text-muted" style={{fontSize:'0.9rem'}}>¥{item.price}</div>
                                            <div className="font-bold text-danger" style={{fontSize:'1.2rem'}}>¥{item.discountPrice}</div>
                                        </>
                                    ) : (
                                        <div className="font-bold text-primary-dark" style={{fontSize:'1.2rem'}}>¥{item.price}</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="message-input-wrapper">
                            <textarea 
                                className="message-textarea" 
                                placeholder="例：少し遅れます！これ飲んで待ってて🙏"
                                value={msg}
                                onChange={e => setMsg(e.target.value)}
                            />
                        </div>

                        <div className="quick-msg-section">
                            <div className="text-sub font-bold" style={{fontSize:'0.9rem', marginBottom:'0.5rem'}}>定型文</div>
                            <div className="quick-msg-list">
                                <button className="quick-msg-btn" onClick={() => setMsg("ごめん！5分遅れます💦 これで温まってて！")}>
                                    🏃 ごめん！5分遅れます💦
                                </button>
                                <button className="quick-msg-btn" onClick={() => setMsg("お待たせ！先にお店に入ってて🙇‍♂️")}>
                                    🙏 先にお店に入ってて
                                </button>
                                <button className="quick-msg-btn" onClick={() => setMsg("いつもありがとう！感謝の気持ちです☕")}>
                                    ✨ いつもありがとう！
                                </button>
                            </div>
                        </div>

                        <button className="btn-primary w-full" onClick={handleProceedToPayment}>
                            <Gift className="icon-md" />
                            購入手続きへ
                        </button>
                    </div>
                </div>
            )}

            {step === 7 && item && area && storesData[area] && (
                <div className="step4-container">
                    <button className="btn-back" onClick={() => setStep(4)}>
                        <ChevronLeft className="icon-md" /> 戻る
                    </button>
                    
                    <div className="message-card">
                        <div className="font-bold text-center" style={{fontSize:'1.4rem', marginBottom:'1.5rem'}}>お支払い</div>
                        
                        <div className="gift-preview" style={{borderColor:'var(--primary)'}}>
                            <div className="gift-row">
                                <div className="gift-info">
                                    <div className="gift-emoji">{item.emoji}</div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sub" style={{fontSize:'0.9rem'}}>{storesData[area][storeIdx].name}</div>
                                    </div>
                                </div>
                                <div className="gift-price-col" style={{textAlign:'right'}}>
                                     {item.discountPrice ? (
                                        <div className="font-bold text-danger" style={{fontSize:'1.2rem'}}>¥{item.discountPrice}</div>
                                    ) : (
                                        <div className="font-bold text-primary-dark" style={{fontSize:'1.2rem'}}>¥{item.price}</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div style={{marginBottom:'1.5rem'}}>
                            <div className="search-label" style={{fontSize:'1rem', marginBottom:'0.5rem'}}>お支払い方法の選択</div>
                            <div style={{display:'flex', flexDirection:'column', gap:'0.8rem'}}>
                                <div 
                                    className={`menu-item ${paymentMethod === 'paypay' ? 'selected' : ''}`} 
                                    style={{padding:'1rem', borderColor: paymentMethod === 'paypay' ? 'var(--primary)' : 'var(--border)', background: paymentMethod === 'paypay' ? 'var(--bg-off)' : 'white'}}
                                    onClick={() => setPaymentMethod('paypay')}
                                >
                                    <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                                        <Smartphone className="icon-md text-sub" />
                                        <div style={{flex:1, fontWeight:'bold'}}>PayPay</div>
                                        {paymentMethod === 'paypay' && <CheckCircle className="icon-md text-primary" />}
                                    </div>
                                </div>

                                <div 
                                    className={`menu-item ${paymentMethod === 'credit' ? 'selected' : ''}`} 
                                    style={{
                                        padding:'1rem', 
                                        borderColor: paymentMethod === 'credit' ? 'var(--primary)' : 'var(--border)', 
                                        background: paymentMethod === 'credit' ? 'var(--bg-off)' : 'white',
                                        flexDirection: 'column',
                                        alignItems: 'stretch',
                                        gap: '0.5rem',
                                        transition: 'all 0.3s'
                                    }}
                                    onClick={() => setPaymentMethod('credit')}
                                >
                                    <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                                        <CreditCard className="icon-md text-sub" />
                                        <div style={{flex:1, fontWeight:'bold'}}>クレジットカード</div>
                                        {paymentMethod === 'credit' && <CheckCircle className="icon-md text-primary" />}
                                    </div>
                                    {paymentMethod === 'credit' && (
                                        <div className="cc-form" style={{marginTop:'0.5rem', paddingTop:'1rem', borderTop:'1px dashed var(--border)'}} onClick={e => e.stopPropagation()}>
                                            <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                                                <div>
                                                    <label style={{fontSize:'0.75rem', color:'var(--text-sub)', fontWeight:'bold', display:'block', marginBottom:'0.3rem'}}>カード番号</label>
                                                    <input 
                                                        type="text" 
                                                        className="search-input" 
                                                        placeholder="0000 0000 0000 0000"
                                                        value={ccNumber}
                                                        onChange={e => {
                                                            const val = e.target.value.replace(/\D/g, '').substring(0, 16);
                                                            setCcNumber(val);
                                                        }}
                                                        style={{background:'white', border:'1px solid var(--border)', borderRadius:'0.3rem', width:'100%', fontSize:'1rem', padding:'0.6rem'}}
                                                    />
                                                </div>
                                                <div>
                                                    <label style={{fontSize:'0.75rem', color:'var(--text-sub)', fontWeight:'bold', display:'block', marginBottom:'0.3rem'}}>カード名義人</label>
                                                    <input 
                                                        type="text" 
                                                        className="search-input" 
                                                        placeholder="TARO YAMADA"
                                                        value={ccName}
                                                        onChange={e => setCcName(e.target.value.toUpperCase())}
                                                        style={{background:'white', border:'1px solid var(--border)', borderRadius:'0.3rem', width:'100%', fontSize:'1rem', padding:'0.6rem'}}
                                                    />
                                                </div>
                                                <div style={{display:'flex', gap:'1rem'}}>
                                                    <div style={{flex:1}}>
                                                        <label style={{fontSize:'0.75rem', color:'var(--text-sub)', fontWeight:'bold', display:'block', marginBottom:'0.3rem'}}>有効期限</label>
                                                        <input 
                                                            type="text" 
                                                            className="search-input" 
                                                            placeholder="MM/YY"
                                                            maxLength={5}
                                                            value={ccExpiry}
                                                            onChange={e => setCcExpiry(e.target.value)}
                                                            style={{background:'white', border:'1px solid var(--border)', borderRadius:'0.3rem', width:'100%', fontSize:'1rem', padding:'0.6rem'}}
                                                        />
                                                    </div>
                                                    <div style={{flex:1}}>
                                                        <label style={{fontSize:'0.75rem', color:'var(--text-sub)', fontWeight:'bold', display:'block', marginBottom:'0.3rem'}}>セキュリティコード</label>
                                                        <input 
                                                            type="password" 
                                                            className="search-input" 
                                                            placeholder="CVC"
                                                            maxLength={4}
                                                            value={ccCvc}
                                                            onChange={e => setCcCvc(e.target.value)}
                                                            style={{background:'white', border:'1px solid var(--border)', borderRadius:'0.3rem', width:'100%', fontSize:'1rem', padding:'0.6rem'}}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {paymentError && (
                            <div style={{color:'var(--status-full)', fontSize:'0.9rem', display:'flex', alignItems:'center', gap:'0.3rem', marginBottom:'1rem', background:'#fee2e2', padding:'0.8rem', borderRadius:'0.5rem'}}>
                                <AlertCircle className="icon-sm" /> {paymentError}
                            </div>
                        )}

                        <div style={{marginTop:'auto', paddingTop:'1rem', borderTop:'1px solid var(--border)'}}>
                            <div style={{display:'flex', justifyContent:'space-between', marginBottom:'1rem', fontWeight:'bold', fontSize:'1.1rem'}}>
                                <span>合計</span>
                                <span>¥{item.discountPrice ?? item.price}</span>
                            </div>
                            <button className="btn-primary w-full" onClick={handlePaymentAndCreate}>
                                <CheckCircle className="icon-md" />
                                決済してチケットを作成
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {step === 5 && ticket && (
                <div className="step5-container">
                    <div className="complete-card">
                        <div className="success-icon">
                            <CheckCircle className="icon-xl text-primary" style={{width:'3rem', height:'3rem'}} />
                        </div>
                        <div className="font-bold" style={{fontSize:'1.5rem', marginBottom:'0.5rem'}}>チケット作成完了！</div>
                        <div className="text-sub" style={{marginBottom:'2rem'}}>URLを相手に送ってください</div>

                        <div className="link-section">
                            <div className="link-label">共有リンク</div>
                            <div className="link-container">
                                <div className="link-text">{shareUrl}</div>
                                <button className="btn-copy" onClick={handleCopy}>
                                    {isCopied ? <Check className="icon-md text-primary" /> : <Copy className="icon-md" />}
                                </button>
                            </div>
                            <button className="btn-preview" onClick={handlePreview}>
                                <Eye className="icon-md" />
                                相手が見る画面を確認
                            </button>
                        </div>

                        <button className="btn-primary w-full" onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: 'カフェチケット',
                                    text: ticket.message, // Use ticket.message instead of msg to ensure default text is used
                                    url: shareUrl
                                });
                            } else {
                                handleCopy();
                                alert('リンクをコピーしました');
                            }
                        }}>
                            <Send className="icon-md" />
                            LINEなどで送る
                        </button>
                        <div style={{marginTop:'1rem'}}>
                            <button className="btn-home" onClick={() => { setStep(1); setArea(null); setTicket(null); setMsg(''); }}>
                                トップに戻る
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {step === 6 && ticket && (
                <div className="step5-container">
                    <div className="complete-card">
                        {isPreview ? (
                            <div className="ticket-msg-box" style={{marginBottom:'1.5rem', background:'var(--bg-off)', border:'none'}}>
                                <div className="text-sub font-bold text-center" style={{fontSize:'0.9rem'}}>プレビューモード</div>
                            </div>
                        ) : (
                            <div className="font-bold text-center" style={{fontSize:'1.4rem', marginBottom:'1.5rem'}}>
                                チケットが届いています🎁
                            </div>
                        )}

                        <div className="ticket-preview">
                            <div className="ticket-header">
                                <div className="store-image">{ticket.store.image}</div>
                                <div>
                                    <div className="font-bold text-dark">{ticket.store.name}</div>
                                    <div className="text-sub" style={{fontSize:'0.8rem'}}>{ticket.area.name}</div>
                                </div>
                            </div>
                            
                            <div className="ticket-msg-box">
                                <div className="ticket-msg-label">Message</div>
                                <div className="text-main" style={{whiteSpace:'pre-wrap', lineHeight:'1.5'}}>{ticket.message}</div>
                            </div>

                            <div style={{margin:'1.5rem 0', textAlign:'center'}}>
                                <div className="font-bold" style={{fontSize:'1.2rem', marginBottom:'0.5rem'}}>{ticket.item.name}</div>
                                <div style={{fontSize:'3.5rem', lineHeight:'1', marginBottom:'0.5rem'}}>{ticket.item.emoji}</div>
                                <div className="text-primary font-bold">Ticket ID: {ticket.ticketId}</div>
                            </div>
                            
                            <div style={{textAlign:'center', marginBottom: '1.5rem'}}>
                                <TicketQR />
                                <div className="text-sub" style={{fontSize:'0.7rem', marginTop:'0.5rem'}}>お店でこの画面を提示してください</div>
                            </div>

                            {/* Ticket Map */}
                            <div className="ticket-map-container" ref={ticketMapRef}></div>
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${ticket.store.coords.lat},${ticket.store.coords.lng}`}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-preview"
                                style={{marginTop: '0.5rem', background: 'white'}}
                            >
                                <MapIcon className="icon-sm" /> Googleマップで開く
                            </a>
                        </div>

                        {isPreview ? (
                            <button className="btn-home" onClick={() => { setStep(5); setIsPreview(false); }}>
                                閉じる
                            </button>
                        ) : (
                            <button className="btn-primary w-full" onClick={() => window.location.href = window.location.origin}>
                                アプリを使ってみる
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Help Modal */}
            {helpOpen && (
                <div className="modal-overlay" onClick={() => setHelpOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setHelpOpen(false)}><X className="icon-md" /></button>
                        
                        {helpStep === 0 && (
                            <div className="help-content-wrapper">
                                <div className="help-emoji">🙏</div>
                                <div className="help-title">遅刻のお詫びに<br/>コーヒーを贈ろう</div>
                                <p className="help-text">
                                    「ごめん、少し遅れる！」<br/>
                                    そんな時、待っている相手に<br/>
                                    近くのカフェチケットを<br/>
                                    サッと送信できるサービスです。
                                </p>
                            </div>
                        )}
                        {helpStep === 1 && (
                            <div className="help-content-wrapper">
                                <div className="help-emoji">📍</div>
                                <div className="help-title">エリアを選ぶ</div>
                                <p className="help-text">
                                    待ち合わせ場所の駅名や<br/>
                                    エリアを入力して検索。<br/>
                                    近くのカフェが表示されます。
                                </p>
                            </div>
                        )}
                        {helpStep === 2 && (
                            <div className="help-content-wrapper">
                                <div className="help-emoji">🎁</div>
                                <div className="help-title">チケットを送る</div>
                                <p className="help-text">
                                    メニューを選んで<br/>
                                    メッセージを添えるだけ。<br/>
                                    発行されたURLを<br/>
                                    相手に送れば完了です！
                                </p>
                            </div>
                        )}

                        <div className="help-dots">
                            {[0,1,2].map(i => (
                                <div key={i} className={`banner-dot ${i === helpStep ? 'active' : ''}`} />
                            ))}
                        </div>

                        <button className="btn-primary w-full" onClick={() => {
                            if (helpStep < 2) setHelpStep(helpStep + 1);
                            else setHelpOpen(false);
                        }}>
                            {helpStep < 2 ? '次へ' : 'はじめる'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;