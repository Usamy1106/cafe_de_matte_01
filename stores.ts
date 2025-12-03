
export const rawStoresData = [
    {
        "id": 1,
        "name": "Shinjuku South Gate Light Cafe",
        "image": "🌤️",
        "atmosphere": "南口の光が差し込む明るいカフェ。待ち合わせしやすい",
        "station": "新宿駅",
        "coordinates": { "lat": 35.6885, "lng": 139.7006 },
        "status": "open",
        "distance": 2,
        "features": ["南口近く", "明るい", "短時間滞在OK"],
        "menu": [
            { "name": "ミニカフェラテ", "price": 420, "emoji": "☕", "description": "軽めのラテ", "category": "Coffee" },
            { "name": "レモンクッキー", "price": 210, "emoji": "🍋", "description": "爽やかな甘さ", "category": "Sweets" },
            { "name": "小さめサンドセット", "price": 520, "emoji": "🥪", "description": "軽食に最適", "category": "Set" }
        ],
        "coupons": [{ "name": "ラテ50円OFF", "discount": 50 }]
    },
    {
        "id": 2,
        "name": "Shinjuku East Walk Stand",
        "image": "🚶",
        "atmosphere": "東口からすぐの立ち飲み中心のミニカフェ",
        "station": "新宿駅",
        "coordinates": { "lat": 35.6903, "lng": 139.7021 },
        "status": "busy",
        "distance": 3,
        "features": ["東口", "立ち飲み", "回転早い"],
        "menu": [
            { "name": "ショートエスプレッソ", "price": 300, "emoji": "☕", "description": "濃いめで素早く飲める", "category": "Coffee" },
            { "name": "チーズラスク", "price": 200, "emoji": "🧀", "description": "軽いおつまみ感覚", "category": "Sweets" }
        ]
    },
    {
        "id": 3,
        "name": "Shinjuku Quiet Step Lounge",
        "image": "🪑",
        "atmosphere": "人混みからすこし離れた落ち着く待ち合わせスポット",
        "station": "新宿駅",
        "coordinates": { "lat": 35.6890, "lng": 139.6991 },
        "status": "open",
        "distance": 5,
        "features": ["静か", "ソロ向け", "待ち合わせ◎"],
        "menu": [
            { "name": "ショートほうじ茶ラテ", "price": 430, "emoji": "🍵", "description": "やさしい甘さ", "category": "Drink" },
            { "name": "きなこクッキー", "price": 220, "emoji": "🍪", "description": "和風な軽い甘さ", "category": "Sweets" },
            { "name": "チキンスティックサンド", "price": 460, "emoji": "🥪", "description": "片手で食べやすい", "category": "Food" }
        ]
    },
    {
        "id": 4,
        "name": "Shinjuku West Side Terrace",
        "image": "🌇",
        "atmosphere": "西口近くのテラス席が人気の穴場カフェ",
        "station": "新宿駅",
        "coordinates": { "lat": 35.6909, "lng": 139.6975 },
        "status": "open",
        "distance": 4,
        "features": ["テラス", "穴場", "静かな空気"],
        "menu": [
            { "name": "アイスティー（S）", "price": 380, "emoji": "🧋", "description": "すっきり飲める", "category": "Drink" },
            { "name": "シナモンロール（小）", "price": 280, "emoji": "🍩", "description": "軽めの甘さ", "category": "Sweets" },
            { "name": "ミニハムサンド", "price": 440, "emoji": "🥪", "description": "小腹満たしに", "category": "Food" }
        ],
        "coupons": [{ "name": "ロール30円OFF", "discount": 30 }]
    },
    {
        "id": 5,
        "name": "Shinjuku North Breeze Spot",
        "image": "🍃",
        "atmosphere": "北側の静かなエリアにある小さめカフェ",
        "station": "新宿駅",
        "coordinates": { "lat": 35.6922, "lng": 139.6997 },
        "status": "open",
        "distance": 7,
        "features": ["北側", "静か", "落ち着く"],
        "menu": [
            { "name": "ミントティー", "price": 390, "emoji": "🌿", "description": "清涼感が心地よい", "category": "Drink" },
            { "name": "ショートマフィン", "price": 250, "emoji": "🧁", "description": "食べやすいサイズ", "category": "Sweets" }
        ]
    },
    {
        "id": 6,
        "name": "Shinjuku Central Gate Cafe",
        "image": "🚉",
        "atmosphere": "中央改札前の定番待ち合わせカフェ",
        "station": "新宿駅",
        "coordinates": { "lat": 35.6897, "lng": 139.7003 },
        "status": "busy",
        "distance": 1,
        "features": ["改札前", "集合しやすい", "座席回転早い"],
        "menu": [
            { "name": "ブレンドコーヒー（S）", "price": 360, "emoji": "☕", "description": "定番の味わい", "category": "Coffee" },
            { "name": "ミニワッフル", "price": 260, "emoji": "🧇", "description": "軽めのスイーツ", "category": "Sweets" },
            { "name": "アボカドミニサンド", "price": 480, "emoji": "🥪", "description": "ヘルシーな軽食", "category": "Food" }
        ]
    },
    {
        "id": 7,
        "name": "Shinjuku West Walk Mini Stand",
        "image": "🚶‍♂️",
        "atmosphere": "西口歩道沿いにあるサクッと寄れるスタンド",
        "station": "新宿駅",
        "coordinates": { "lat": 35.6914, "lng": 139.6984 },
        "status": "open",
        "distance": 3,
        "features": ["テイクアウト中心", "短時間利用", "歩きやすい"],
        "menu": [
            { "name": "レモンスカッシュ", "price": 420, "emoji": "🍋", "description": "すっきり爽やか", "category": "Drink" },
            { "name": "チョコクッキー", "price": 200, "emoji": "🍪", "description": "軽い甘さ", "category": "Sweets" }
        ],
        "coupons": [{ "name": "ドリンク20円OFF", "discount": 20 }]
    },
    {
        "id": 8,
        "name": "Shinjuku Meeting Base",
        "image": "⛺",
        "atmosphere": "待ち合わせ利用を想定した落ち着きカフェ",
        "region": "新宿駅",
        "location": { "lat": 35.69031, "lng": 139.70069 },
        "features": ["静か", "スマホ充電", "テーブル広め"],
        "menu": [
            { "name": "カフェアメリカーノ", "price": 390, "emoji": "☕", "description": "軽めで飲みやすい", "category": "Drink" },
            { "name": "スコーン（小）", "price": 260, "emoji": "🍪", "description": "小ぶりで丁度いい", "category": "Sweets", "discountPrice": 200 },
            { "name": "軽食セット（ドリンク＋スコーン）", "price": 580, "emoji": "🥤", "description": "少し時間がある時に", "category": "Set" }
        ]
    },
    {
        "id": 9,
        "name": "Shinjuku Quick Food Stand",
        "image": "🥨",
        "atmosphere": "改札近くの立ち寄りスナックスタンド",
        "region": "新宿駅",
        "location": { "lat": 35.69061, "lng": 139.69941 },
        "features": ["立ち食いOK", "スピード提供"],
        "menu": [
            { "name": "ミニプレッツェル", "price": 200, "emoji": "🥨", "description": "片手で食べられる塩気", "category": "Food", "discountPrice": 170 },
            { "name": "レモンウォーター", "price": 180, "emoji": "🍋", "description": "さっぱり喉を潤す", "category": "Drink" }
        ]
    },
    {
        "id": 10,
        "name": "Meeting Cafe West Shinjuku",
        "image": "🧭",
        "atmosphere": "西口の待ち合わせスポットとして人気の簡易カフェ",
        "region": "新宿駅",
        "location": { "lat": 35.69100, "lng": 139.69991 },
        "features": ["WiFi", "すぐ出られる"],
        "menu": [
            { "name": "ミニカフェモカ", "price": 430, "emoji": "☕", "description": "小さめでも満足", "category": "Drink" },
            { "name": "チョコワッフル（小）", "price": 280, "emoji": "🧇", "description": "甘いけど軽い", "category": "Sweets" },
            { "name": "クーポンセット（モカ+ワッフル）", "price": 650, "emoji": "🎟️", "description": "お得セット", "category": "Set", "discountPrice": 580 }
        ]
    },
    {
        "id": 11,
        "name": "Ikebukuro Small Rest Cafe",
        "image": "🪴",
        "atmosphere": "少し静かに待てる落ち着きの小カフェ",
        "region": "池袋駅",
        "location": { "lat": 35.72892, "lng": 139.71005 },
        "features": ["静か", "小規模"],
        "menu": [
            { "name": "ハーブティー", "price": 420, "emoji": "🌿", "description": "リラックスできる香り", "category": "Drink" },
            { "name": "ミニラスク", "price": 180, "emoji": "🍞", "description": "サクッと軽い", "category": "Sweets" }
        ]
    },
    {
        "id": 12,
        "name": "Ikebukuro Meeting Deck",
        "image": "🪵",
        "atmosphere": "デッキ風のテラス席で待ち合わせしやすい場所",
        "region": "池袋駅",
        "location": { "lat": 35.72981, "lng": 139.70911 },
        "features": ["テラス席", "気軽"],
        "menu": [
            { "name": "ミニオレンジジュース", "price": 300, "emoji": "🍊", "description": "飲みやすいサイズ", "category": "Drink" },
            { "name": "チーズクラッカー", "price": 190, "emoji": "🧀", "description": "軽い塩気", "category": "Food", "discountPrice": 150 }
        ]
    },
    {
        "id": 13,
        "name": "Sunny Stand Ikebukuro",
        "image": "🌤️",
        "atmosphere": "気軽に寄れるカウンター式カフェ",
        "region": "池袋駅",
        "location": { "lat": 35.72932, "lng": 139.70850 },
        "features": ["カウンター席", "テイクアウト"],
        "menu": [
            { "name": "ブラックコーヒー（S）", "price": 350, "emoji": "☕", "description": "苦味しっかり", "category": "Drink" },
            { "name": "ミニアップルパイ", "price": 260, "emoji": "🥧", "description": "小さめで食べやすい", "category": "Sweets" },
            { "name": "セット（飲み物+パイ）", "price": 580, "emoji": "🥤", "description": "待ち時間に最適", "category": "Set", "discountPrice": 520 }
        ]
    },
    {
        "id": 14,
        "name": "Ebisu Light Coffee Spot",
        "image": "🌱",
        "atmosphere": "恵比寿らしい落ち着きのある待ち合わせ向けカフェ",
        "region": "恵比寿駅",
        "location": { "lat": 35.64667, "lng": 139.71001 },
        "features": ["静か", "落ち着き"],
        "menu": [
            { "name": "カフェラテ（S）", "price": 420, "emoji": "☕", "description": "香り高いエスプレッソ", "category": "Drink" },
            { "name": "ひとくちガトーショコラ", "price": 260, "emoji": "🍫", "description": "濃厚な甘み", "category": "Sweets" }
        ]
    },
    {
        "id": 15,
        "name": "Ebisu Small Meeting Cafe",
        "image": "🤝",
        "atmosphere": "小さなテーブルが並ぶ待ち合わせ特化のカフェ",
        "region": "恵比寿駅",
        "location": { "lat": 35.64621, "lng": 139.70922 },
        "features": ["WiFi", "少人数向け"],
        "menu": [
            { "name": "ミニカフェオレ", "price": 390, "emoji": "🥛", "description": "ミルク感しっかり", "category": "Drink" },
            { "name": "ショートブレッド", "price": 230, "emoji": "🍪", "description": "ほろっと甘い", "category": "Sweets" },
            { "name": "ミニセット（ドリンク+お菓子）", "price": 560, "emoji": "🥤", "description": "少し時間がある時に", "category": "Set" }
        ]
    },
    {
        "id": 16,
        "name": "Ebisu Pocket Stand",
        "image": "🎒",
        "atmosphere": "持ち歩きしやすい軽食が充実した小型スタンド",
        "region": "恵比寿駅",
        "location": { "lat": 35.64650, "lng": 139.71110 },
        "features": ["テイクアウト", "軽食中心"],
        "menu": [
            { "name": "ミニホットドッグ", "price": 280, "emoji": "🌭", "description": "食べやすい小サイズ", "category": "Food" },
            { "name": "ミニコーラ", "price": 220, "emoji": "🥤", "description": "飲み切りサイズ", "category": "Drink", "discountPrice": 180 }
        ]
    },
    {
        "id": 17,
        "name": "Kichijoji Mini Chill Cafe",
        "image": "🌿",
        "atmosphere": "吉祥寺らしいゆるさの待ち合わせカフェ",
        "region": "吉祥寺駅",
        "location": { "lat": 35.70326, "lng": 139.57945 },
        "features": ["静か", "木目調"],
        "menu": [
            { "name": "アイスカフェラテ（S）", "price": 430, "emoji": "🧊", "description": "すっきり飲みやすい", "category": "Drink" },
            { "name": "ミニマフィン", "price": 230, "emoji": "🧁", "description": "甘さひかえめ", "category": "Sweets" }
        ]
    },
    {
        "id": 18,
        "name": "Meeting Loft Kichijoji",
        "image": "🏠",
        "atmosphere": "小さめスペースで落ち着ける待ち合わせ喫茶",
        "region": "吉祥寺駅",
        "location": { "lat": 35.70355, "lng": 139.57911 },
        "features": ["テーブル広め", "静か"],
        "menu": [
            { "name": "アールグレイティー", "price": 380, "emoji": "🍂", "description": "香り高い紅茶", "category": "Drink" },
            { "name": "ミニガレット", "price": 260, "emoji": "🥞", "description": "軽い食感", "category": "Food", "discountPrice": 220 }
        ]
    },
    {
        "id": 19,
        "name": "Omotesando Light Coffee Hub",
        "image": "🌼",
        "atmosphere": "表参道らしいスタイリッシュな待ち合わせ向けカフェ",
        "region": "表参道駅",
        "location": { "lat": 35.66521, "lng": 139.71201 },
        "features": ["おしゃれ", "落ち着く"],
        "menu": [
            { "name": "フラットホワイト（S）", "price": 480, "emoji": "🥛", "description": "ミルキーで香り高い", "category": "Drink" },
            { "name": "プチフィナンシェ", "price": 240, "emoji": "🍰", "description": "軽い焼菓子", "category": "Sweets" }
        ]
    },
    {
        "id": 20,
        "name": "Omotesando Quick Bar",
        "image": "✨",
        "atmosphere": "立ち寄りやすいスモールバー型カフェ",
        "region": "表参道駅",
        "location": { "lat": 35.66560, "lng": 139.71150 },
        "features": ["立ち寄りやすい", "高速提供"],
        "menu": [
            { "name": "カモミールティー", "price": 420, "emoji": "🌼", "description": "落ち着く香り", "category": "Drink" },
            { "name": "ミニクレープ", "price": 280, "emoji": "🥞", "description": "軽く甘い", "category": "Sweets" }
        ]
    },
    {
        "id": 21,
        "name": "Cafe Pocket Omotesando",
        "image": "📘",
        "atmosphere": "ポケットサイズのスイーツが人気の小カフェ",
        "region": "表参道駅",
        "location": { "lat": 35.66544, "lng": 139.71240 },
        "features": ["テイクアウト", "スイーツ"],
        "menu": [
            { "name": "抹茶ラテ（小）", "price": 450, "emoji": "🍵", "description": "香り豊か", "category": "Drink" },
            { "name": "ミニ抹茶ケーキ", "price": 260, "emoji": "🍰", "description": "ふわっと甘い", "category": "Sweets" }
        ]
    },
    {
        "id": 22,
        "name": "Akihabara Fast Snack",
        "image": "⚡",
        "atmosphere": "秋葉原らしいスピード重視のスタンド",
        "region": "秋葉原駅",
        "location": { "lat": 35.69859, "lng": 139.77315 },
        "features": ["高速提供", "立ち食い"],
        "menu": [
            { "name": "ミニナポリタンパン", "price": 240, "emoji": "🍝", "description": "小さめスナック", "category": "Food", "discountPrice": 200 },
            { "name": "エナジードリンク（S）", "price": 280, "emoji": "⚡", "description": "すぐ元気に", "category": "Drink" }
        ]
    },
    {
        "id": 23,
        "name": "Akiba Quick Meet Cafe",
        "image": "🕹️",
        "atmosphere": "ゲームショップ近くの待ち合わせスポット",
        "region": "秋葉原駅",
        "location": { "lat": 35.69890, "lng": 139.77380 },
        "features": ["WiFi", "軽食"],
        "menu": [
            { "name": "ブラックティー（S）", "price": 310, "emoji": "🍂", "description": "渋めの味わい", "category": "Drink" },
            { "name": "コーンスティック", "price": 210, "emoji": "🌽", "description": "軽い塩気", "category": "Food" }
        ]
    },
    {
        "id": 24,
        "name": "Electric Stand Akiba",
        "image": "💡",
        "atmosphere": "充電スタンド併設の軽食バー",
        "region": "秋葉原駅",
        "location": { "lat": 35.69921, "lng": 139.77401 },
        "features": ["充電OK", "テイクアウト"],
        "menu": [
            { "name": "ホットミルクティー", "price": 360, "emoji": "🥛", "description": "甘くて温かい", "category": "Drink" },
            { "name": "スティックポテト", "price": 230, "emoji": "🥔", "description": "軽い食感", "category": "Food" }
        ]
    },
    {
        "id": 25,
        "name": "Shinagawa Small Break Cafe",
        "image": "🚆",
        "atmosphere": "新幹線待ちにも使える静かな小カフェ",
        "region": "品川駅",
        "location": { "lat": 35.62847, "lng": 139.73838 },
        "features": ["新幹線近い", "静か"],
        "menu": [
            { "name": "ホットココア（S）", "price": 410, "emoji": "🍫", "description": "甘さ控えめ", "category": "Drink" },
            { "name": "ビスケット", "price": 180, "emoji": "🍪", "description": "軽い食感", "category": "Sweets" }
        ]
    },
    {
        "id": 26,
        "name": "Shinagawa Quick Coffee",
        "image": "🎫",
        "atmosphere": "改札直結のスピードカフェ",
        "region": "品川駅",
        "location": { "lat": 35.62810, "lng": 139.73910 },
        "features": ["高速提供", "席少なめ"],
        "menu": [
            { "name": "エスプレッソ（S）", "price": 320, "emoji": "☕", "description": "濃厚ショット", "category": "Drink" },
            { "name": "ミニクロワッサン", "price": 220, "emoji": "🥐", "description": "サクサク軽い", "category": "Sweets" }
        ]
    },
    {
        "id": 27,
        "name": "Cafe Track Shinagawa",
        "image": "🛤️",
        "atmosphere": "線路横のとても静かな待ち合わせカフェ",
        "region": "品川駅",
        "location": { "lat": 35.62891, "lng": 139.73951 },
        "features": ["静か", "隠れ家"],
        "menu": [
            { "name": "ゆずティー", "price": 390, "emoji": "🍋", "description": "香りの良い柑橘", "category": "Drink" },
            { "name": "プチシフォン", "price": 240, "emoji": "🍰", "description": "ふわっと軽い", "category": "Sweets" }
        ]
    },
    {
        "id": 28,
        "name": "Ueno Light Cafe",
        "image": "🦢",
        "atmosphere": "上野らしい落ち着いた雰囲気の待ち合わせカフェ",
        "region": "上野駅",
        "location": { "lat": 35.71342, "lng": 139.77605 },
        "features": ["静か", "博物館近く"],
        "menu": [
            { "name": "ジャスミンティー", "price": 360, "emoji": "🌸", "description": "ふわっと上品", "category": "Drink" },
            { "name": "ひとくちタルト", "price": 240, "emoji": "🥧", "description": "小さめサイズ", "category": "Sweets", "discountPrice": 200 }
        ]
    },
    {
        "id": 29,
        "name": "Ueno Parkside Stand",
        "image": "🌳",
        "atmosphere": "公園の入り口にある立ち寄りカフェ",
        "region": "上野駅",
        "location": { "lat": 35.71310, "lng": 139.77531 },
        "features": ["公園前", "立ち食い"],
        "menu": [
            { "name": "アイスレモネード", "price": 350, "emoji": "🍋", "description": "すっきり爽快", "category": "Drink" },
            { "name": "ミニチュロス", "price": 260, "emoji": "🥨", "description": "ちょい食べサイズ", "category": "Sweets" }
        ]
    },
    {
        "id": 30,
        "name": "Cafe Micro Ueno",
        "image": "📎",
        "atmosphere": "小規模で落ち着けるスモールカフェ",
        "region": "上野駅",
        "location": { "lat": 35.71361, "lng": 139.77680 },
        "features": ["静か", "WiFi"],
        "menu": [
            { "name": "ミルクティー（S）", "price": 390, "emoji": "🥛", "description": "やさしい甘さ", "category": "Drink" },
            { "name": "ミニショートケーキ", "price": 260, "emoji": "🍰", "description": "食べやすいサイズ", "category": "Sweets" }
        ]
    },
    {
        "id": 31,
        "name": "Corner Relax Espresso",
        "image": "☕",
        "atmosphere": "駅すぐの落ち着く角カフェ。人混みを避けて待ち合わせしやすい",
        "station": "秋葉原駅",
        "coordinates": { "lat": 35.6982, "lng": 139.7730 },
        "status": "open",
        "distance": 1,
        "features": ["電源", "静かめ", "短時間滞在OK"],
        "menu": [
            { "name": "エスプレッソショット", "price": 300, "emoji": "☕", "description": "さっと飲める濃い一杯", "category": "Drink" },
            { "name": "小さめバナナブレッド", "price": 260, "emoji": "🍞", "description": "軽めのおやつに最適", "category": "Sweets" },
            { "name": "本日のミニサンド", "price": 480, "emoji": "🥪", "description": "食べ歩きOKなサイズ", "category": "Food" },
            { "name": "クイックラテ", "price": 420, "emoji": "🥛", "description": "待ち合わせ向きの小カップ", "category": "Drink" }
        ],
        "coupons": [
            { "name": "ラテ50円引き", "discount": 50 },
            { "name": "エスプレッソ2杯目100円", "discount": 100 }
        ]
    },
    {
        "id": 32,
        "name": "KINOKO Meeting Stand",
        "image": "🍄",
        "atmosphere": "立ち寄りやすいカウンター中心のミニカフェ",
        "station": "池袋駅",
        "coordinates": { "lat": 35.7289, "lng": 139.7100 },
        "status": "open",
        "distance": 3,
        "features": ["立ち飲み", "軽食", "混雑少なめ"],
        "menu": [
            { "name": "ほうじ茶ミルク", "price": 450, "emoji": "🍵", "description": "和風テイストで飲みやすい", "category": "Drink" },
            { "name": "一口チーズキューブ", "price": 320, "emoji": "🧀", "description": "軽いスナック感覚", "category": "Food" },
            { "name": "KINOKOミニマフィン", "price": 260, "emoji": "🧁", "description": "甘さ控えめの待ち合わせ菓子", "category": "Sweets" },
            { "name": "バターラスク", "price": 200, "emoji": "🍪", "description": "サクッとつまめる", "category": "Sweets" }
        ],
        "coupons": [{ "name": "飲み物30円オフ", "discount": 30 }]
    },
    {
        "id": 33,
        "name": "City Breeze Coffee Spot",
        "image": "🌬️",
        "atmosphere": "風通しのいいテラス席が人気の駅前カフェ",
        "station": "有楽町駅",
        "coordinates": { "lat": 35.6750, "lng": 139.7638 },
        "status": "busy",
        "distance": 2,
        "features": ["テラス席", "WiFi", "待ち合わせ向き"],
        "menu": [
            { "name": "シトラススカッシュ", "price": 520, "emoji": "🍋", "description": "爽やかで短時間滞在に最適", "category": "Drink" },
            { "name": "プチチキンラップ", "price": 480, "emoji": "🌯", "description": "片手で食べやすい巻物系", "category": "Food" },
            { "name": "焼き菓子アソート（小）", "price": 380, "emoji": "🍪", "description": "隙間時間のお供に", "category": "Sweets" }
        ]
    },
    {
        "id": 34,
        "name": "SANDY Quick Bite",
        "image": "🥙",
        "atmosphere": "駅ナカにあるミニフードブース。とにかく早い",
        "station": "新橋駅",
        "coordinates": { "lat": 35.6664, "lng": 139.7580 },
        "status": "open",
        "distance": 1,
        "features": ["テイクアウト", "時短", "小腹満たし"],
        "menu": [
            { "name": "チキンピタ（ミニ）", "price": 390, "emoji": "🥙", "description": "片手でOKの軽量サイズ", "category": "Food" },
            { "name": "ゆずスパークリング", "price": 450, "emoji": "🍊", "description": "甘さ控えめの爽快ドリンク", "category": "Drink" },
            { "name": "小さな焼きドーナツ", "price": 200, "emoji": "🍩", "description": "脂少なめで軽い", "category": "Sweets" },
            { "name": "ミニサラダカップ", "price": 350, "emoji": "🥗", "description": "待つ間にさっと食物繊維", "category": "Food" }
        ],
        "coupons": [
            { "name": "ピタ50円オフ", "discount": 50 },
            { "name": "セット100円引き", "discount": 100 }
        ]
    },
    {
        "id": 35,
        "name": "Hibiya Light Drink Bar",
        "image": "💡",
        "atmosphere": "薄明かりの静かな雰囲気。短時間作業にも向く",
        "station": "日比谷駅",
        "coordinates": { "lat": 35.6740, "lng": 139.7607 },
        "status": "open",
        "distance": 4,
        "features": ["静か", "ソロ客多め", "軽食"],
        "menu": [
            { "name": "ライトブレンド", "price": 430, "emoji": "☕", "description": "飲みやすい中煎りブレンド", "category": "Coffee" },
            { "name": "抹茶クッキー", "price": 250, "emoji": "🍵", "description": "香り高い和菓子系", "category": "Sweets" },
            { "name": "サラダラップ（小）", "price": 420, "emoji": "🌯", "description": "ヘルシーで手軽", "category": "Food" },
            { "name": "クラフトジンジャー", "price": 480, "emoji": "🥤", "description": "ピリっと刺激のジンジャー", "category": "Drink" },
            { "name": "スティックフィナンシェ", "price": 210, "emoji": "🍰", "description": "細長くて食べやすい", "category": "Sweets" }
        ],
        "coupons": [{ "name": "フィナンシェ20円引き", "discount": 20 }]
    },
    {
        "id": 36,
        "name": "Tokyo Trails Refresh Booth",
        "image": "🚉",
        "atmosphere": "駅ホーム横のちょい休憩スポット",
        "station": "品川駅",
        "coordinates": { "lat": 35.6285, "lng": 139.7386 },
        "status": "busy",
        "distance": 1,
        "features": ["駅近", "すぐ買える", "立ち飲み"],
        "menu": [
            { "name": "トニックウォーター", "price": 320, "emoji": "🥤", "description": "すっきり系", "category": "Drink" },
            { "name": "ミニクロックムッシュ", "price": 480, "emoji": "🥪", "description": "温め可で軽食に最適", "category": "Food" },
            { "name": "ラムレーズンクッキー", "price": 240, "emoji": "🍪", "description": "香りよく食べやすい", "category": "Sweets" },
            { "name": "ホットティー（S）", "price": 330, "emoji": "🍵", "description": "寒い季節の待ち合わせに", "category": "Drink" }
        ]
    },
    {
        "id": 37,
        "name": "Minami Cafe GATE",
        "image": "🚪",
        "atmosphere": "改札目の前にあるわかりやすい集合スポット",
        "station": "恵比寿駅",
        "coordinates": { "lat": 35.6467, "lng": 139.7100 },
        "status": "open",
        "distance": 1,
        "features": ["改札前", "店内明るい", "初めてでも集合しやすい"],
        "menu": [
            { "name": "ミニワッフルセット", "price": 480, "emoji": "🧇", "description": "紅茶orコーヒー付き", "category": "Set" },
            { "name": "ミックスジュース", "price": 500, "emoji": "🥤", "description": "まろやかなフルーツ系", "category": "Drink" },
            { "name": "コーヒーS", "price": 360, "emoji": "☕", "description": "小さめカップで丁度良い", "category": "Coffee" },
            { "name": "バナナスコーン", "price": 260, "emoji": "🧁", "description": "甘すぎず食べやすい", "category": "Sweets" }
        ],
        "coupons": [{ "name": "ワッフルセット100円引き", "discount": 100 }]
    },
    {
        "id": 38,
        "name": "Ochanomizu Bridge Stand",
        "image": "🌉",
        "atmosphere": "橋の上の開放感があり、短時間滞在にぴったり",
        "station": "御茶ノ水駅",
        "coordinates": { "lat": 35.6994, "lng": 139.7650 },
        "status": "open",
        "distance": 2,
        "features": ["テラス", "軽食", "駅からすぐ"],
        "menu": [
            { "name": "ハニーバタートースト（小）", "price": 380, "emoji": "🍞", "description": "甘くて軽い一皿", "category": "Food" },
            { "name": "ブレンドティー", "price": 420, "emoji": "🍵", "description": "香り高い茶葉", "category": "Drink" },
            { "name": "ベリークッキー", "price": 230, "emoji": "🍓", "description": "酸味がアクセント", "category": "Sweets" },
            { "name": "スティックパイ", "price": 180, "emoji": "🥨", "description": "サクサクで手軽", "category": "Sweets" }
        ]
    },
    {
        "id": 39,
        "name": "Kanda Small Talk Cafe",
        "image": "💬",
        "atmosphere": "軽く喋るのにちょうどいい静けさ",
        "station": "神田駅",
        "coordinates": { "lat": 35.6916, "lng": 139.7708 },
        "status": "open",
        "distance": 2,
        "features": ["静か", "座席多め", "待ち合わせ◎"],
        "menu": [
            { "name": "コーヒー（S）", "price": 350, "emoji": "☕", "description": "軽めのコーヒー", "category": "Coffee" },
            { "name": "バタースコーン", "price": 300, "emoji": "🧁", "description": "あっさりした味", "category": "Sweets" },
            { "name": "ミニサンド（卵）", "price": 420, "emoji": "🥪", "description": "軽食の定番", "category": "Food" },
            { "name": "ぶどうジュース", "price": 430, "emoji": "🍇", "description": "さっぱりした甘み", "category": "Drink" },
            { "name": "ヌガークッキー", "price": 250, "emoji": "🍪", "description": "香ばしくて小腹満たしに", "category": "Sweets" }
        ],
        "coupons": [{ "name": "コーヒー30円オフ", "discount": 30 }]
    },
    {
        "id": 40,
        "name": "Ueno Parkside Meeting Cafe",
        "image": "🌳",
        "atmosphere": "公園近くで落ち着いた待ち合わせスポット",
        "station": "上野駅",
        "coordinates": { "lat": 35.7148, "lng": 139.7773 },
        "status": "open",
        "distance": 4,
        "features": ["公園前", "ゆったり", "スイーツ多め"],
        "menu": [
            { "name": "抹茶ラテ（S）", "price": 450, "emoji": "🍵", "description": "和風で落ち着く味", "category": "Drink" },
            { "name": "シナモンロール（小）", "price": 380, "emoji": "🍩", "description": "甘さ控えめ", "category": "Sweets" },
            { "name": "ベーグルハーフ", "price": 300, "emoji": "🥯", "description": "小さめサイズでちょうどいい", "category": "Food" },
            { "name": "フルーツゼリー", "price": 280, "emoji": "🍊", "description": "軽めでさっぱり", "category": "Sweets" },
            { "name": "カフェラテ", "price": 480, "emoji": "☕", "description": "香り豊か", "category": "Coffee" },
            { "name": "バタークッキー", "price": 220, "emoji": "🍪", "description": "定番のお供", "category": "Sweets" }
        ],
        "coupons": [
            { "name": "ラテ50円オフ", "discount": 50 },
            { "name": "スイーツセット100円オフ", "discount": 100 }
        ]
    },
    {
        "id": 41,
        "name": "Shibuya Quick Meet Cafe",
        "image": "⏳",
        "atmosphere": "駅から1分で入れる待ち合わせ特化カフェ",
        "region": "渋谷駅",
        "location": { "lat": 35.65901, "lng": 139.70121 },
        "features": ["駅前", "高速提供", "立ち寄りやすい"],
        "menu": [
            { "name": "ミニカフェラテ", "price": 360, "emoji": "☕", "description": "短時間でも満足できる小カップ", "category": "Drink" },
            { "name": "スティックバターサンド", "price": 240, "emoji": "🥪", "description": "待ち時間にさっと食べられる", "category": "Food", "discountPrice": 200 },
            { "name": "プチチーズケーキ", "price": 260, "emoji": "🍰", "description": "軽めのサイズ", "category": "Sweets" }
        ]
    },
    {
        "id": 42,
        "name": "Shibuya Mini Stand L",
        "image": "🪑",
        "atmosphere": "すぐ座れる小型スタンド型カフェ",
        "region": "渋谷駅",
        "location": { "lat": 35.65930, "lng": 139.70170 },
        "features": ["スツール席", "WiFi", "テイクアウト"],
        "menu": [
            { "name": "アイスティー（S）", "price": 320, "emoji": "🧊", "description": "あっさりした飲み口", "category": "Drink" },
            { "name": "ミニパウンドケーキ", "price": 220, "emoji": "🍞", "description": "小さめでちょうどいい", "category": "Sweets" },
            { "name": "軽食セット（飲み物+焼菓子）", "price": 540, "emoji": "🥤", "description": "手軽な組み合わせ", "category": "Set", "discountPrice": 480 }
        ]
    },
    {
        "id": 43,
        "name": "Corner Spot Shibuya",
        "image": "📍",
        "atmosphere": "渋谷の角地にあるサッと入れる待ち合わせスポット",
        "region": "渋谷駅",
        "location": { "lat": 35.65872, "lng": 139.70211 },
        "features": ["駅近", "電源あり"],
        "menu": [
            { "name": "ホットコーヒー（S）", "price": 340, "emoji": "☕", "description": "短時間でもホッとできる", "category": "Drink" },
            { "name": "小さなチョコクッキー", "price": 150, "emoji": "🍪", "description": "すぐ食べられる甘さ", "category": "Sweets" }
        ]
    },
    {
        "id": 44,
        "name": "Shibuya Hill Breeze Cafe",
        "image": "🍃",
        "atmosphere": "緩やかな坂の上で風通しがよく静かなカフェ",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6609, "lng": 139.6997 },
        "status": "open",
        "distance": 6,
        "features": ["坂上", "静か", "テラス席"],
        "menu": [
            { "name": "ハーブティー（S）", "price": 420, "emoji": "🍵", "description": "リラックスできる香り", "category": "Drink" },
            { "name": "クロッカン", "price": 240, "emoji": "🍪", "description": "サクサク食感", "category": "Sweets" },
            { "name": "ミニベーグルサンド", "price": 450, "emoji": "🥯", "description": "軽食に最適", "category": "Food" }
        ]
    },
    {
        "id": 45,
        "name": "Shibuya Bridge Entry Stand",
        "image": "🌉",
        "atmosphere": "高架下の隙間空間にあるミニカフェ",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6583, "lng": 139.6990 },
        "status": "busy",
        "distance": 4,
        "features": ["隠れ家", "立ち飲み", "短時間向け"],
        "menu": [
            { "name": "ショートコーヒー", "price": 330, "emoji": "☕", "description": "小さめサイズ", "category": "Coffee" },
            { "name": "レモンケーキ（小）", "price": 260, "emoji": "🍋", "description": "爽やかで食べやすい", "category": "Sweets" }
        ],
        "coupons": [{ "name": "コーヒー30円OFF", "discount": 30 }]
    },
    {
        "id": 46,
        "name": "Shibuya Quiet Steps Cafe",
        "image": "👣",
        "atmosphere": "人通りが少ない階段下の静かなスポット",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6590, "lng": 139.6987 },
        "status": "open",
        "distance": 5,
        "features": ["階段下", "静か", "軽食多め"],
        "menu": [
            { "name": "カモミールティー", "price": 430, "emoji": "🌼", "description": "リラックス効果◎", "category": "Drink" },
            { "name": "オートミールクッキー", "price": 220, "emoji": "🍪", "description": "食物繊維豊富", "category": "Sweets" },
            { "name": "チキンラップ（小）", "price": 450, "emoji": "🌯", "description": "片手で食べやすい", "category": "Food" }
        ]
    },
    {
        "id": 47,
        "name": "Shibuya Mini Roastery Point",
        "image": "🔥",
        "atmosphere": "小型ロースターが店内で香るコーヒー専門店",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6603, "lng": 139.6983 },
        "status": "open",
        "distance": 3,
        "features": ["自家焙煎", "香り強い", "待ち合わせ向け"],
        "menu": [
            { "name": "ミニドリップ", "price": 450, "emoji": "☕", "description": "香りの良い定番", "category": "Coffee" },
            { "name": "コーヒークッキー", "price": 210, "emoji": "🍪", "description": "ほろ苦い大人味", "category": "Sweets" },
            { "name": "スモールサンド（ハム）", "price": 430, "emoji": "🥪", "description": "軽めの食事", "category": "Food" }
        ],
        "coupons": [{ "name": "ドリップ50円引き", "discount": 50 }]
    },
    {
        "id": 48,
        "name": "Shibuya Urban Waiting Spot",
        "image": "🏙️",
        "atmosphere": "都会的な雰囲気で落ち着ける待合せ定番店",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6592, "lng": 139.6995 },
        "status": "busy",
        "distance": 2,
        "features": ["駅近", "モダン", "座席多め"],
        "menu": [
            { "name": "ミニフラットホワイト", "price": 420, "emoji": "☕", "description": "ミルク感たっぷり", "category": "Coffee" },
            { "name": "レーズンスコーン（小）", "price": 260, "emoji": "🧁", "description": "甘さ控えめ", "category": "Sweets" },
            { "name": "ミニサラダカップ", "price": 350, "emoji": "🥗", "description": "ヘルシーで軽い", "category": "Food" }
        ]
    },
    {
        "id": 49,
        "name": "Shibuya Cozy Corner Cafe",
        "image": "🪟",
        "atmosphere": "窓際席が多く明るい雰囲気のカフェ",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6605, "lng": 139.7009 },
        "status": "open",
        "distance": 3,
        "features": ["明るい", "窓際席", "軽食あり"],
        "menu": [
            { "name": "ミルクティー（S）", "price": 400, "emoji": "🫖", "description": "まろやかな味わい", "category": "Drink" },
            { "name": "チョコチップマフィン（小）", "price": 250, "emoji": "🧁", "description": "甘さ控えめ", "category": "Sweets" },
            { "name": "ミニクロワッサンサンド", "price": 460, "emoji": "🥐", "description": "ちょうど良いサイズ感", "category": "Food" }
        ]
    },
    {
        "id": 50,
        "name": "Shibuya Forest Edge Stand",
        "image": "🌲",
        "atmosphere": "緑に囲まれた落ち着く癒やし空間",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6597, "lng": 139.7014 },
        "status": "open",
        "distance": 4,
        "features": ["自然系", "静か", "待ち合わせしやすい"],
        "menu": [
            { "name": "グリーンティー", "price": 380, "emoji": "🍵", "description": "ほんのり甘い", "category": "Drink" },
            { "name": "バタージャムクッキー", "price": 220, "emoji": "🍪", "description": "甘酸っぱさが◎", "category": "Sweets" }
        ],
        "coupons": [{ "name": "お茶20円引き", "discount": 20 }]
    },
    {
        "id": 51,
        "name": "Shibuya Stream Quick Deck",
        "image": "🧊",
        "atmosphere": "ストリーム近くの涼しいデッキスペース",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6584, "lng": 139.7022 },
        "status": "open",
        "distance": 3,
        "features": ["涼しい", "テラス", "短時間向け"],
        "menu": [
            { "name": "アイスレモンティー", "price": 430, "emoji": "🧋", "description": "すっきり爽快", "category": "Drink" },
            { "name": "塩キャラメルクッキー", "price": 230, "emoji": "🍪", "description": "甘じょっぱくて人気", "category": "Sweets" },
            { "name": "ミニホットサンド", "price": 460, "emoji": "🥪", "description": "食べやすいサイズ", "category": "Food" }
        ]
    },
    {
        "id": 52,
        "name": "Shibuya Crossview Lite Cafe",
        "image": "👀",
        "atmosphere": "少し高い位置から交差点を眺められる",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6593, "lng": 139.7006 },
        "status": "busy",
        "distance": 2,
        "features": ["眺め良い", "待ち合わせ定番", "夜景◎"],
        "menu": [
            { "name": "ショートモカ", "price": 420, "emoji": "☕", "description": "甘すぎず飲みやすい", "category": "Coffee" },
            { "name": "ベリータルトミニ", "price": 310, "emoji": "🍓", "description": "さっぱりした甘さ", "category": "Sweets" }
        ],
        "coupons": [{ "name": "モカ30円OFF", "discount": 30 }]
    },
    {
        "id": 53,
        "name": "Shibuya Lane Pocket Stand",
        "image": "📦",
        "atmosphere": "細い路地の奥にある小さなスタンド店",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6589, "lng": 139.6979 },
        "status": "open",
        "distance": 6,
        "features": ["路地裏", "小規模", "テイクアウト専用"],
        "menu": [
            { "name": "ショートエスプレッソ", "price": 300, "emoji": "☕", "description": "濃いめの一杯", "category": "Coffee" },
            { "name": "アーモンドクッキー", "price": 200, "emoji": "🌰", "description": "香ばしいタイプ", "category": "Sweets" }
        ]
    },
    {
        "id": 54,
        "name": "Shibuya Upper Terrace Lite",
        "image": "🏞️",
        "atmosphere": "高台のテラスで落ち着けるリラックス空間",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6607, "lng": 139.6990 },
        "status": "open",
        "distance": 8,
        "features": ["テラス席", "穴場", "静か"],
        "menu": [
            { "name": "ハニーミルク", "price": 420, "emoji": "🥛", "description": "ほんのり甘い", "category": "Drink" },
            { "name": "フルーツゼリー", "price": 260, "emoji": "🍊", "description": "軽く食べられる", "category": "Sweets" }
        ]
    },
    {
        "id": 55,
        "name": "Shibuya Night Alley Coffee",
        "image": "🌙",
        "atmosphere": "夜の路地裏で静かに過ごせる大人向けスポット",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6591, "lng": 139.6973 },
        "status": "open",
        "distance": 7,
        "features": ["夜向け", "静か", "落ち着く"],
        "menu": [
            { "name": "ナイトブレンド（S）", "price": 460, "emoji": "☕", "description": "深みのある味わい", "category": "Coffee" },
            { "name": "ビターチョコクッキー", "price": 240, "emoji": "🍫", "description": "大人の甘さ", "category": "Sweets" }
        ],
        "coupons": [{ "name": "ブレンド50円引き", "discount": 50 }]
    },
    {
        "id": 56,
        "name": "Shibuya Stream Garden Stand",
        "image": "🌼",
        "atmosphere": "花壇の横にある癒やし系カフェ",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6587, "lng": 139.7020 },
        "status": "open",
        "distance": 4,
        "features": ["ガーデン", "落ち着く", "香り良い"],
        "menu": [
            { "name": "ジャスミンティー", "price": 380, "emoji": "🌸", "description": "華やかな香り", "category": "Drink" },
            { "name": "フロランタン", "price": 250, "emoji": "🍪", "description": "濃厚で人気", "category": "Sweets" }
        ]
    },
    {
        "id": 57,
        "name": "Shibuya New South Exit Cafe",
        "image": "📘",
        "atmosphere": "南口近くで人が多いが座席回転が早い",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6575, "lng": 139.7015 },
        "status": "busy",
        "distance": 2,
        "features": ["南口", "回転が早い", "短時間滞在OK"],
        "menu": [
            { "name": "アイスコーヒー（S）", "price": 380, "emoji": "🥤", "description": "すっきり後味", "category": "Drink" },
            { "name": "スイートポテト（小）", "price": 260, "emoji": "🍠", "description": "甘さ控えめ", "category": "Sweets" }
        ]
    },
    {
        "id": 58,
        "name": "Shibuya West Trail Cafe",
        "image": "🛤️",
        "atmosphere": "線路沿いにある隠れスポット",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6570, "lng": 139.6965 },
        "status": "open",
        "distance": 9,
        "features": ["線路沿い", "人少なめ", "静か"],
        "menu": [
            { "name": "ショートミルクティー", "price": 380, "emoji": "🫖", "description": "優しい味", "category": "Drink" },
            { "name": "くるみクッキー", "price": 240, "emoji": "🌰", "description": "香ばしい風味", "category": "Sweets" },
            { "name": "ミニフィッシュサンド", "price": 420, "emoji": "🥪", "description": "あっさりヘルシー", "category": "Food" }
        ]
    },
    {
        "id": 59,
        "name": "Shibuya Small Garden Table",
        "image": "🪴",
        "atmosphere": "観葉植物に囲まれた落ち着くスポット",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6594, "lng": 139.6985 },
        "status": "open",
        "distance": 6,
        "features": ["観葉植物", "癒し", "静か"],
        "menu": [
            { "name": "ハーブミントティー", "price": 430, "emoji": "🌿", "description": "清涼感のある香り", "category": "Drink" },
            { "name": "チョコチップクッキー", "price": 220, "emoji": "🍪", "description": "定番の甘さ", "category": "Sweets" }
        ],
        "coupons": [{ "name": "ティー30円OFF", "discount": 30 }]
    },
    {
        "id": 60,
        "name": "Shibuya Rooftop Mini Deck",
        "image": "🌤️",
        "atmosphere": "小さな屋上デッキで開放感ある空間",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6599, "lng": 139.6992 },
        "status": "open",
        "distance": 7,
        "features": ["屋上", "眺め良い", "短時間OK"],
        "menu": [
            { "name": "ソーダフロート（S）", "price": 460, "emoji": "🥤", "description": "すっきり甘い", "category": "Drink" },
            { "name": "バニラサブレ", "price": 230, "emoji": "🍪", "description": "やさしい甘さ", "category": "Sweets" }
        ]
    },
    {
        "id": 61,
        "name": "Shibuya East Alley Beans",
        "image": "🫘",
        "atmosphere": "東側路地にあるコーヒー豆にこだわる店",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6608, "lng": 139.7021 },
        "status": "busy",
        "distance": 5,
        "features": ["豆専門", "コーヒー強め", "路地裏"],
        "menu": [
            { "name": "ショートブレンド", "price": 420, "emoji": "☕", "description": "深煎りで香ばしい", "category": "Coffee" },
            { "name": "エスプレッソクッキー", "price": 240, "emoji": "🍪", "description": "ほろ苦い甘さ", "category": "Sweets" }
        ]
    },
    {
        "id": 62,
        "name": "Shibuya Light Hill Corner",
        "image": "🔆",
        "atmosphere": "坂の途中で光が差し込む明るいカフェ",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6603, "lng": 139.6988 },
        "status": "open",
        "distance": 5,
        "features": ["坂沿い", "明るい", "静か"],
        "menu": [
            { "name": "オレンジティー", "price": 390, "emoji": "🍊", "description": "爽やかで飲みやすい", "category": "Drink" },
            { "name": "キャラメルケーキ（小）", "price": 260, "emoji": "🍰", "description": "軽い甘さ", "category": "Sweets" }
        ]
    },
    {
        "id": 63,
        "name": "Shibuya Station Meeting Deck",
        "image": "📍",
        "atmosphere": "駅から近く集合しやすいウッドデッキ席",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6595, "lng": 139.7002 },
        "status": "open",
        "distance": 1,
        "features": ["駅近", "デッキ席", "待ち合わせ定番"],
        "menu": [
            { "name": "ホットティー（S）", "price": 350, "emoji": "🍵", "description": "優しい味わい", "category": "Drink" },
            { "name": "ラズベリークッキー", "price": 240, "emoji": "🍪", "description": "酸味がアクセント", "category": "Sweets" },
            { "name": "ミニサンドセット", "price": 500, "emoji": "🥪", "description": "軽食に最適なセット", "category": "Set" }
        ],
        "coupons": [{ "name": "セット100円OFF", "discount": 100 }]
    },
    {
        "id": 64,
        "name": "Shibuya Hachiko Meet Spot Cafe",
        "image": "🐶",
        "atmosphere": "ハチ公口すぐ。視認性が高く待ち合わせしやすい小さなカフェ",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6591, "lng": 139.7005 },
        "status": "open",
        "distance": 1,
        "features": ["ハチ公口すぐ", "人混みでも目立つ", "短時間滞在OK"],
        "menu": [
            { "name": "ハチ公ブレンド", "price": 450, "emoji": "☕", "description": "すっきり飲みやすい", "category": "Coffee" },
            { "name": "ミニバタースコーン", "price": 260, "emoji": "🧈", "description": "小腹満たしに最適", "category": "Sweets" }
        ],
        "coupons": [{ "name": "ブレンド30円OFF", "discount": 30 }]
    },
    {
        "id": 65,
        "name": "Shibuya Stream Side Stand",
        "image": "🌊",
        "atmosphere": "渋谷ストリーム1Fの開けた通路沿いで集合しやすい",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6569, "lng": 139.7034 },
        "status": "open",
        "distance": 3,
        "features": ["ストリーム直結", "開放感◎", "テイクアウト向き"],
        "menu": [
            { "name": "スチームラテ", "price": 480, "emoji": "🥛", "description": "ミルキーで優しい味", "category": "Coffee" },
            { "name": "シトラスバー", "price": 230, "emoji": "🍊", "description": "爽やかで軽い", "category": "Sweets" }
        ]
    },
    {
        "id": 66,
        "name": "Shibuya Central Plaza Kissa",
        "image": "🟥",
        "atmosphere": "スクランブル交差点からすぐで迷わない",
        "station": "渋谷駅",
        "coordinates": { "lat": 35.6594, "lng": 139.7000 },
        "status": "open",
        "distance": 2,
        "features": ["スクランブル至近", "視認性◎", "座れる"],
        "menu": [
            { "name": "クラシックブレンド", "price": 430, "emoji": "☕", "description": "飲みやすい味わい", "category": "Coffee" },
            { "name": "チョコビスケット", "price": 240, "emoji": "🍫", "description": "甘さ控えめ", "category": "Sweets" }
        ]
    },
    {
        "id": 67,
        "name": "Ikebukuro East Smile Stand",
        "image": "✨",
        "atmosphere": "東口から出てすぐの広場横で分かりやすい",
        "station": "池袋駅",
        "coordinates": { "lat": 35.7294, "lng": 139.7131 },
        "status": "open",
        "distance": 2,
        "features": ["東口すぐ", "視界が開けている", "短時間滞在OK"],
        "menu": [
            { "name": "ミニカプチーノ", "price": 430, "emoji": "☕", "description": "ふわっと軽い泡", "category": "Coffee" },
            { "name": "キャラメルサブレ", "price": 220, "emoji": "🍪", "description": "サクっと香ばしい", "category": "Sweets" }
        ]
    },
    {
        "id": 68,
        "name": "Ikebukuro West Gate Loft Cafe",
        "image": "🌆",
        "atmosphere": "西口ロータリー近くで目印が多く迷わない",
        "station": "池袋駅",
        "coordinates": { "lat": 35.7288, "lng": 139.7102 },
        "status": "open",
        "distance": 3,
        "features": ["西口ロータリー横", "席が多い", "待ち合わせ向き"],
        "menu": [
            { "name": "ウエストブレンド", "price": 450, "emoji": "☕", "description": "コク深い味", "category": "Coffee" },
            { "name": "ナッツクッキー", "price": 240, "emoji": "🥜", "description": "香ばしいナッツ入り", "category": "Sweets" }
        ]
    },
    {
        "id": 69,
        "name": "Ikebukuro Sunshine Link Cafe",
        "image": "🌞",
        "atmosphere": "サンシャイン通り入口側で目印が豊富",
        "station": "池袋駅",
        "coordinates": { "lat": 35.7298, "lng": 139.7170 },
        "status": "open",
        "distance": 5,
        "features": ["サンシャイン通り入口", "人通り◎", "軽食あり"],
        "menu": [
            { "name": "サンシャインアイスコーヒー", "price": 400, "emoji": "🧊", "description": "すっきり飲みやすい", "category": "Coffee" },
            { "name": "ハニーラスク", "price": 200, "emoji": "🍯", "description": "甘くて軽い", "category": "Sweets" }
        ]
    },
    {
        "id": 70,
        "name": "Ueno Park Front Meet Cafe",
        "image": "🌿",
        "atmosphere": "公園前で視界が広く待ち合わせしやすい",
        "station": "上野駅",
        "coordinates": { "lat": 35.7138, "lng": 139.7765 },
        "status": "open",
        "distance": 3,
        "features": ["公園前", "広々して見つけやすい", "短時間滞在OK"],
        "menu": [
            { "name": "パークブレンド", "price": 420, "emoji": "☕", "description": "軽めで飲みやすい", "category": "Coffee" },
            { "name": "はちみつサブレ", "price": 210, "emoji": "🍯", "description": "ほんのり甘い", "category": "Sweets" }
        ]
    },
    {
        "id": 71,
        "name": "Ueno Central Gate Snack Stand",
        "image": "🚉",
        "atmosphere": "中央改札近くで迷いにくい。待ち合わせ定番スポット",
        "station": "上野駅",
        "coordinates": { "lat": 35.7134, "lng": 139.7771 },
        "status": "open",
        "distance": 1,
        "features": ["中央改札すぐ", "テイクアウト中心", "視認性◎"],
        "menu": [
            { "name": "エスプレッソショット", "price": 320, "emoji": "☕", "description": "サッと飲める濃さ", "category": "Coffee" },
            { "name": "チョコミニマフィン", "price": 190, "emoji": "🧁", "description": "少量で満足", "category": "Sweets" }
        ]
    },
    {
        "id": 72,
        "name": "Ueno Ameyoko Meet Lounge",
        "image": "🍡",
        "atmosphere": "アメ横入口に面し、初めてでも迷わない",
        "station": "上野駅",
        "coordinates": { "lat": 35.7119, "lng": 139.7747 },
        "status": "open",
        "distance": 4,
        "features": ["アメ横入口", "座席あり", "にぎやか"],
        "menu": [
            { "name": "黒糖ラテ", "price": 460, "emoji": "🥛", "description": "やさしい甘さ", "category": "Coffee" },
            { "name": "アメ横団子風クッキー", "price": 230, "emoji": "🍡", "description": "見た目かわいい", "category": "Sweets" }
        ]
    },
    {
        "id": 73,
        "name": "Shinagawa Konan Meet Terrace",
        "image": "🌅",
        "atmosphere": "港南口の大階段前で見通しがよく待ち合わせしやすい",
        "station": "品川駅",
        "coordinates": { "lat": 35.6286, "lng": 139.7388 },
        "status": "open",
        "distance": 2,
        "features": ["港南口すぐ", "広々した屋外スペース", "短時間滞在OK"],
        "menu": [
            { "name": "ライトブレンド", "price": 430, "emoji": "☕", "description": "すっきり飲めるコーヒー", "category": "Coffee" },
            { "name": "カフェモカ", "price": 480, "emoji": "🍫", "description": "甘さ控えめのモカ", "category": "Coffee" },
            { "name": "プレーンマドレーヌ", "price": 240, "emoji": "🍰", "description": "軽い甘み", "category": "Sweets" },
            { "name": "チョコクッキー", "price": 230, "emoji": "🍪", "description": "定番の一枚", "category": "Sweets" },
            { "name": "ミニサンド（ハム）", "price": 520, "emoji": "🥪", "description": "軽い食事に最適", "category": "Set" },
            { "name": "ヨーグルトカップ", "price": 350, "emoji": "🥣", "description": "ヘルシーな軽食", "category": "LightMeal" }
        ]
    },
    {
        "id": 74,
        "name": "Shinagawa Highline Coffee Spot",
        "image": "🚉",
        "atmosphere": "改札上のコンコース直結、迷わない定番集合スポット",
        "station": "品川駅",
        "coordinates": { "lat": 35.6292, "lng": 139.7393 },
        "status": "open",
        "distance": 1,
        "features": ["コンコース直結", "視認性◎", "テイクアウト向き"],
        "menu": [
            { "name": "エスプレッソ", "price": 330, "emoji": "☕", "description": "濃いめで目が覚める", "category": "Coffee" },
            { "name": "アメリカーノ", "price": 380, "emoji": "🥤", "description": "軽い飲み口", "category": "Coffee" },
            { "name": "抹茶クッキー", "price": 240, "emoji": "🍵", "description": "ほんのり苦味", "category": "Sweets" },
            { "name": "ミニチーズタルト", "price": 260, "emoji": "🧀", "description": "小さめサイズ", "category": "Sweets" },
            { "name": "ミニサンド（ツナ）", "price": 540, "emoji": "🥪", "description": "あっさり味", "category": "Set" },
            { "name": "フルーツゼリー", "price": 300, "emoji": "🍊", "description": "さっぱり食べられる", "category": "LightMeal" }
        ]
    },
    {
        "id": 75,
        "name": "Shinagawa Portside Waiting Cafe",
        "image": "⚓",
        "atmosphere": "港南エリアの広場に面した静かな待ち合わせ向きカフェ",
        "station": "品川駅",
        "coordinates": { "lat": 35.6277, "lng": 139.7401 },
        "status": "open",
        "distance": 4,
        "features": ["広場前", "落ち着いた雰囲気", "座席多め"],
        "menu": [
            { "name": "ミルクラテ", "price": 460, "emoji": "🥛", "description": "まろやかで優しい", "category": "Coffee" },
            { "name": "キャラメルラテ", "price": 500, "emoji": "🍮", "description": "香り豊か", "category": "Coffee" },
            { "name": "フロランタン", "price": 260, "emoji": "🌰", "description": "香ばしい甘さ", "category": "Sweets" },
            { "name": "バニラマフィン", "price": 250, "emoji": "🧁", "description": "軽く食べられる", "category": "Sweets" },
            { "name": "ミニサンド（エッグ）", "price": 500, "emoji": "🥚", "description": "朝にもぴったり", "category": "Set" },
            { "name": "カットフルーツ", "price": 350, "emoji": "🍓", "description": "ヘルシーで軽い", "category": "LightMeal" }
        ]
    },
    {
        "id": 76,
        "name": "Shinagawa Wing North Stand",
        "image": "🕊️",
        "atmosphere": "駅北側のウィング高架下にあり、雨の日の集合に便利",
        "station": "品川駅",
        "coordinates": { "lat": 35.6301, "lng": 139.7390 },
        "status": "open",
        "distance": 2,
        "features": ["雨に強い", "高架下で安心", "テイクアウト◎"],
        "menu": [
            { "name": "ブラックコーヒー", "price": 390, "emoji": "☕", "description": "香り高い深煎り", "category": "Coffee" },
            { "name": "ヘーゼルナッツラテ", "price": 510, "emoji": "🌰", "description": "香り豊かな風味", "category": "Coffee" },
            { "name": "バタークッキー", "price": 210, "emoji": "🧈", "description": "やさしい甘さ", "category": "Sweets" },
            { "name": "ミニチョコケーキ", "price": 280, "emoji": "🍫", "description": "濃厚で小さめ", "category": "Sweets" },
            { "name": "ミニサンド（チキン）", "price": 550, "emoji": "🍗", "description": "軽食にぴったり", "category": "Set" },
            { "name": "シリアルバー", "price": 300, "emoji": "🌾", "description": "サクっと食べられる", "category": "LightMeal" }
        ]
    },
    {
        "id": 77,
        "name": "Tokyo Marunouchi Brick Alley Cafe",
        "image": "🏢",
        "atmosphere": "丸の内南口すぐのレンガ通りで視認性が高い",
        "station": "東京駅",
        "coordinates": { "lat": 35.6764, "lng": 139.7650 },
        "status": "open",
        "distance": 1,
        "features": ["南口近く", "目印が多い", "短時間向き"],
        "menu": [
            { "name": "マイルドブレンド", "price": 450, "emoji": "☕", "description": "丸の内らしい上品な味", "category": "Coffee" },
            { "name": "カフェラテ", "price": 480, "emoji": "🥛", "description": "まろやか", "category": "Coffee" },
            { "name": "バニラクッキー", "price": 230, "emoji": "🍪", "description": "甘すぎず軽い", "category": "Sweets" },
            { "name": "ミニアップルタルト", "price": 260, "emoji": "🍎", "description": "爽やか", "category": "Sweets" },
            { "name": "小さめサンド（ベーコン）", "price": 560, "emoji": "🥓", "description": "食べ応えあり", "category": "Set" },
            { "name": "野菜スープ", "price": 380, "emoji": "🥕", "description": "軽めの食事に", "category": "LightMeal" }
        ]
    },
    {
        "id": 78,
        "name": "Tokyo Yaesu Meet Lounge",
        "image": "🔷",
        "atmosphere": "八重洲地下街直結で雨でも安心の待ち合わせスポット",
        "station": "東京駅",
        "coordinates": { "lat": 35.6791, "lng": 139.7706 },
        "status": "open",
        "distance": 3,
        "features": ["八重洲地下街", "雨でもOK", "席あり"],
        "menu": [
            { "name": "フレンチロースト", "price": 460, "emoji": "☕", "description": "深煎りでコク強め", "category": "Coffee" },
            { "name": "カフェモカ", "price": 500, "emoji": "🍫", "description": "甘さ控えめ", "category": "Coffee" },
            { "name": "シナモンロール", "price": 280, "emoji": "🥨", "description": "香り豊か", "category": "Sweets" },
            { "name": "オレンジケーキ", "price": 260, "emoji": "🍊", "description": "爽やかな味わい", "category": "Sweets" },
            { "name": "ミニサンド（ローストビーフ）", "price": 600, "emoji": "🥩", "description": "豪華だけど軽い", "category": "Set" },
            { "name": "グリーンサラダ", "price": 390, "emoji": "🥗", "description": "軽い食事に", "category": "LightMeal" }
        ]
    },
    {
        "id": 79,
        "name": "Marunouchi Central Plaza Stand",
        "image": "🏙️",
        "atmosphere": "中央口の大きな広場に面し集合がとても簡単",
        "station": "東京駅",
        "coordinates": { "lat": 35.6812, "lng": 139.7660 },
        "status": "open",
        "distance": 1,
        "features": ["中央広場", "迷わない", "テイクアウト多め"],
        "menu": [
            { "name": "クラシックブレンド", "price": 440, "emoji": "☕", "description": "飲み疲れしない味", "category": "Coffee" },
            { "name": "アイスラテ", "price": 480, "emoji": "🧊", "description": "すっきり冷たい", "category": "Coffee" },
            { "name": "チョコチップクッキー", "price": 240, "emoji": "🍪", "description": "定番人気", "category": "Sweets" },
            { "name": "カップケーキ", "price": 280, "emoji": "🧁", "description": "軽く食べられる", "category": "Sweets" },
            { "name": "ミニサンド（野菜）", "price": 520, "emoji": "🥬", "description": "ヘルシー", "category": "Set" },
            { "name": "フルーツヨーグルト", "price": 360, "emoji": "🍓", "description": "小腹に最適", "category": "LightMeal" }
        ]
    },
    {
        "id": 80,
        "name": "Tokyo North Dome Roof Cafe",
        "image": "⛱️",
        "atmosphere": "北口のドーム屋根下で集合がしやすい大型カフェ",
        "station": "東京駅",
        "coordinates": { "lat": 35.6832, "lng": 139.7666 },
        "status": "open",
        "distance": 2,
        "features": ["ドーム屋根下", "広い店内", "軽食◎"],
        "menu": [
            { "name": "北口ブレンド", "price": 450, "emoji": "☕", "description": "香り豊かで飲みやすい", "category": "Coffee" },
            { "name": "キャラメルラテ", "price": 510, "emoji": "🍮", "description": "深い甘さ", "category": "Coffee" },
            { "name": "フィナンシェ", "price": 250, "emoji": "🌰", "description": "バター香る", "category": "Sweets" },
            { "name": "チョコタルト", "price": 280, "emoji": "🍫", "description": "濃厚ミニサイズ", "category": "Sweets" },
            { "name": "ミニサンド（サーモン）", "price": 610, "emoji": "🐟", "description": "人気の軽食", "category": "Set" },
            { "name": "スープセット", "price": 430, "emoji": "🥣", "description": "軽く食べたい時に", "category": "LightMeal" }
        ]
    },
    {
        "id": 81,
        "name": "Nakano North Meet Café",
        "image": "🌼",
        "atmosphere": "中野駅北口広場に面した、わかりやすい集合向きカフェ",
        "station": "中野駅",
        "coordinates": { "lat": 35.7073, "lng": 139.6658 },
        "status": "open",
        "distance": 1,
        "features": ["北口広場", "わかりやすい", "短時間向き"],
        "menu": [
            { "name": "ブレンド", "price": 420, "emoji": "☕", "description": "飲みやすい味", "category": "Coffee" },
            { "name": "アイスコーヒー", "price": 430, "emoji": "🧊", "description": "すっきり", "category": "Coffee" },
            { "name": "ナッツクッキー", "price": 230, "emoji": "🥜", "description": "香ばしい", "category": "Sweets" },
            { "name": "ベリーマフィン", "price": 250, "emoji": "🫐", "description": "甘酸っぱい", "category": "Sweets" },
            { "name": "ミニサンド（ハム＆チーズ）", "price": 520, "emoji": "🧀", "description": "軽めの食事", "category": "Set" },
            { "name": "ヨーグルトボウル", "price": 350, "emoji": "🥣", "description": "ヘルシー", "category": "LightMeal" }
        ]
    },
    {
        "id": 82,
        "name": "Nakano Broadway Entrance Stand",
        "image": "🛍️",
        "atmosphere": "ブロードウェイ入口で迷わず集合できる立地",
        "station": "中野駅",
        "coordinates": { "lat": 35.7091, "lng": 139.6653 },
        "status": "open",
        "distance": 3,
        "features": ["商店街入口", "視認性◎", "テイクアウト向き"],
        "menu": [
            { "name": "カフェラテ", "price": 460, "emoji": "🥛", "description": "まろやか", "category": "Coffee" },
            { "name": "モカ", "price": 480, "emoji": "🍫", "description": "甘めの味", "category": "Coffee" },
            { "name": "クランベリークッキー", "price": 240, "emoji": "🍒", "description": "甘酸っぱい", "category": "Sweets" },
            { "name": "バナナブレッド", "price": 260, "emoji": "🍌", "description": "優しい甘さ", "category": "Sweets" },
            { "name": "ミニサンド（照り焼き）", "price": 550, "emoji": "🍗", "description": "しっかり味", "category": "Set" },
            { "name": "ミックスフルーツ", "price": 360, "emoji": "🍊", "description": "食べやすいカップ", "category": "LightMeal" }
        ]
    },
    {
        "id": 83,
        "name": "Nakano South Terrace Cafe",
        "image": "🌤️",
        "atmosphere": "南口のテラス席で天気が良い日の待ち合わせに最適",
        "station": "中野駅",
        "coordinates": { "lat": 35.7059, "lng": 139.6669 },
        "status": "open",
        "distance": 4,
        "features": ["南口テラス", "開放的", "座席多い"],
        "menu": [
            { "name": "ショートブレッド", "price": 220, "emoji": "🍪", "description": "ほろほろ", "category": "Sweets" },
            { "name": "チーズケーキミニ", "price": 280, "emoji": "🧀", "description": "濃厚", "category": "Sweets" },
            { "name": "小さめサンド（ベジタブル）", "price": 530, "emoji": "🥬", "description": "野菜たっぷり", "category": "Set" },
            { "name": "スープカップ", "price": 390, "emoji": "🥣", "description": "軽食として◎", "category": "LightMeal" }
        ],
        "coupons": [
            { "name": "カプチーノ50円オフ", "discount": 50 },
            { "name": "キャラメルラテ50円オフ", "discount": 50 }
        ]
    },
    {
        "id": 84,
        "name": "Nakano Station Front Light Stand",
        "image": "💡",
        "atmosphere": "駅前ロータリーからすぐで待ち合わせの王道スポット",
        "station": "中野駅",
        "coordinates": { "lat": 35.7077, "lng": 139.6661 },
        "status": "open",
        "distance": 2,
        "features": ["ロータリー横", "迷わない", "テイクアウト◎"],
        "menu": [
            { "name": "ブレンドコーヒー", "price": 430, "emoji": "☕", "description": "バランス良い味", "category": "Coffee" },
            { "name": "アイスラテ", "price": 450, "emoji": "🧊", "description": "喉越し爽やか", "category": "Coffee" },
            { "name": "メープルクッキー", "price": 230, "emoji": "🍁", "description": "やさしい甘さ", "category": "Sweets" },
            { "name": "抹茶パウンド", "price": 260, "emoji": "🍵", "description": "和風の味", "category": "Sweets" },
            { "name": "ミニサンド（チーズ＆レタス）", "price": 520, "emoji": "🥗", "description": "軽め", "category": "Set" },
            { "name": "ミニサラダ", "price": 350, "emoji": "🥗", "description": "軽食にぴったり", "category": "LightMeal" }
        ]
    },
    {
        "id": 85,
        "name": "Oshiage Skyfront Meet Cafe",
        "image": "🗼",
        "atmosphere": "スカイツリー足元ですぐ見つかる集合向きカフェ",
        "station": "押上駅",
        "coordinates": { "lat": 35.7105, "lng": 139.8107 },
        "status": "open",
        "distance": 2,
        "features": ["スカイツリー下", "迷わない", "テラスあり"],
        "menu": [
            { "name": "スカイブレンド", "price": 450, "emoji": "☕", "description": "香りすっきり", "category": "Coffee" },
            { "name": "スカイラテ", "price": 490, "emoji": "🧊", "description": "ふんわりミルク", "category": "Coffee" },
            { "name": "雷おこしクッキー", "price": 250, "emoji": "⚡", "description": "和風の甘さ", "category": "Sweets" },
            { "name": "ミニどらケーキ", "price": 260, "emoji": "🍘", "description": "和風ミニスイーツ", "category": "Sweets" },
            { "name": "小さめサンド（和風チキン）", "price": 540, "emoji": "🍗", "description": "和風味", "category": "Set" },
            { "name": "あんみつカップ", "price": 380, "emoji": "🍡", "description": "甘さ控えめ", "category": "LightMeal" }
        ]
    },
    {
        "id": 86,
        "name": "Oshiage Solamachi Entrance Stand",
        "image": "🏬",
        "atmosphere": "ソラマチ入口近くで初見でも迷わない",
        "station": "押上駅",
        "coordinates": { "lat": 35.7100, "lng": 139.8120 },
        "status": "open",
        "distance": 3,
        "features": ["商業施設入口", "視認性◎", "テイクアウト向け"],
        "menu": [
            { "name": "カフェモカ", "price": 500, "emoji": "🍫", "description": "甘い香り", "category": "Coffee" },
            { "name": "アイスアメリカン", "price": 430, "emoji": "🧊", "description": "すっきり", "category": "Coffee" },
            { "name": "いちごクッキー", "price": 240, "emoji": "🍓", "description": "ほんのり甘酸っぱい", "category": "Sweets" },
            { "name": "ミニバウム", "price": 260, "emoji": "🌀", "description": "食べやすい", "category": "Sweets" },
            { "name": "ミニサンド（エッグ＆ツナ）", "price": 560, "emoji": "🥚", "description": "しっかり味", "category": "Set" },
            { "name": "ゼリーカップ", "price": 300, "emoji": "🍊", "description": "さっぱり食べられる", "category": "LightMeal" }
        ]
    },
    {
        "id": 87,
        "name": "Oshiage Riverfront Relax Cafe",
        "image": "🌉",
        "atmosphere": "川沿いの落ち着いた雰囲気でゆったり待ち合わせ",
        "station": "押上駅",
        "coordinates": { "lat": 35.7087, "lng": 139.8112 },
        "status": "open",
        "distance": 5,
        "features": ["川沿い", "静か", "ゆっくりできる"],
        "menu": [
            { "name": "リバーラテ", "price": 470, "emoji": "☕", "description": "コク深い", "category": "Coffee" },
            { "name": "ヘーゼルラテ", "price": 510, "emoji": "🌰", "description": "ナッツ香る", "category": "Coffee" },
            { "name": "ブラウニー", "price": 270, "emoji": "🍫", "description": "濃厚スイーツ", "category": "Sweets" },
            { "name": "ミニパウンドケーキ", "price": 260, "emoji": "🍞", "description": "甘すぎず美味しい", "category": "Sweets" },
            { "name": "ミニサンド（スモークチキン）", "price": 560, "emoji": "🍗", "description": "満足度高め", "category": "Set" },
            { "name": "ヨーグルトミックス", "price": 360, "emoji": "🥣", "description": "軽食に◎", "category": "LightMeal" }
        ]
    },
    {
        "id": 88,
        "name": "Oshiage Station Front Quick Stand",
        "image": "⏱️",
        "atmosphere": "駅前で視線に入りやすく、サッと待ち合わせ向き",
        "station": "押上駅",
        "coordinates": { "lat": 35.7098, "lng": 139.8100 },
        "status": "open",
        "distance": 1,
        "features": ["駅チカ", "待ち合わせ便利", "テイクアウト速い"],
        "menu": [
            { "name": "シンプルブレンド", "price": 430, "emoji": "☕", "description": "すっきり", "category": "Coffee" },
            { "name": "アイスラテ", "price": 450, "emoji": "🧊", "description": "爽やか", "category": "Coffee" },
            { "name": "抹茶クッキー", "price": 230, "emoji": "🍵", "description": "ほんのり苦い", "category": "Sweets" },
            { "name": "チョコマフィン", "price": 260, "emoji": "🧁", "description": "濃厚だが小さめ", "category": "Sweets" },
            { "name": "ミニサンド（ハムエッグ）", "price": 520, "emoji": "🥚", "description": "軽食に◎", "category": "Set" },
            { "name": "スムージーカップ", "price": 380, "emoji": "🍌", "description": "さっぱり飲める", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "アイスラテ30円オフ", "discount": 30 }]
    },
    {
        "id": 89,
        "name": "Ebisu Garden Front Cafe",
        "image": "🌿",
        "atmosphere": "ガーデンプレイス手前で迷わず集合できる",
        "station": "恵比寿駅",
        "coordinates": { "lat": 35.6437, "lng": 139.7104 },
        "status": "open",
        "distance": 4,
        "features": ["ガーデンプレイス近く", "開放的", "待ち合わせ向き"],
        "menu": [
            { "name": "ガーデンブレンド", "price": 450, "emoji": "☕", "description": "恵比寿らしい上品な味", "category": "Coffee" },
            { "name": "アイスラテ", "price": 480, "emoji": "🧊", "description": "まろやかで爽やか", "category": "Coffee" },
            { "name": "バターサブレ", "price": 240, "emoji": "🧈", "description": "香ばしい甘さ", "category": "Sweets" },
            { "name": "ミニチョコケーキ", "price": 280, "emoji": "🍫", "description": "濃厚だけど小さめ", "category": "Sweets" },
            { "name": "ミニサンド（サーモン）", "price": 590, "emoji": "🐟", "description": "軽めで食べやすい", "category": "Set" },
            { "name": "シリアルボウル", "price": 360, "emoji": "🥣", "description": "ちょい食べに最適", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "アイスラテ30円オフ", "discount": 30 }]
    },
    {
        "id": 90,
        "name": "Ebisu West Exit Terrace",
        "image": "🌤️",
        "atmosphere": "西口のテラス前で視認性が高く集合しやすい",
        "station": "恵比寿駅",
        "coordinates": { "lat": 35.6460, "lng": 139.7089 },
        "status": "open",
        "distance": 2,
        "features": ["西口テラス", "座席多め", "短時間滞在OK"],
        "menu": [
            { "name": "エビスブレンド", "price": 440, "emoji": "☕", "description": "飲みやすい定番", "category": "Coffee" },
            { "name": "カフェモカ", "price": 500, "emoji": "🍫", "description": "ほのかな甘さ", "category": "Coffee" },
            { "name": "バニラクッキー", "price": 230, "emoji": "🍪", "description": "優しい甘み", "category": "Sweets" },
            { "name": "ショコラマフィン", "price": 270, "emoji": "🧁", "description": "ちょうどいい甘さ", "category": "Sweets" },
            { "name": "ミニサンド（ハムチーズ）", "price": 530, "emoji": "🧀", "description": "軽食にぴったり", "category": "Set" },
            { "name": "サラダカップ", "price": 390, "emoji": "🥗", "description": "ヘルシー軽食", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "アイスラテ30円オフ", "discount": 30 }]
    },
    {
        "id": 91,
        "name": "Ebisu East Gate Meet Stand",
        "image": "🕊️",
        "atmosphere": "東口改札出てすぐで初見でも迷わない",
        "station": "恵比寿駅",
        "coordinates": { "lat": 35.6465, "lng": 139.7109 },
        "status": "open",
        "distance": 1,
        "features": ["東口すぐ", "視認性◎", "テイクアウト向き"],
        "menu": [
            { "name": "ライトブレンド", "price": 430, "emoji": "☕", "description": "軽めで飲みやすい", "category": "Coffee" },
            { "name": "アイスアメリカン", "price": 440, "emoji": "🧊", "description": "スッと飲める", "category": "Coffee" },
            { "name": "チョコチップクッキー", "price": 230, "emoji": "🍪", "description": "定番の味", "category": "Sweets" },
            { "name": "レモンタルト", "price": 260, "emoji": "🍋", "description": "爽やかな酸味", "category": "Sweets" },
            { "name": "ミニサンド（ツナ）", "price": 520, "emoji": "🐟", "description": "あっさり味", "category": "Set" },
            { "name": "フルーツゼリー", "price": 300, "emoji": "🍊", "description": "軽い食感", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "アイスラテ30円オフ", "discount": 30 }]
    },
    {
        "id": 92,
        "name": "Kichijoji Sunroad Entrance Stand",
        "image": "🛍️",
        "atmosphere": "サンロード入口で視認性抜群。人通りが多く待ち合わせに便利",
        "station": "吉祥寺駅",
        "coordinates": { "lat": 35.7046, "lng": 139.5792 },
        "status": "open",
        "distance": 1,
        "features": ["商店街入口", "迷わない立地", "テイクアウト強め"],
        "menu": [
            { "name": "カフェラテ", "price": 460, "emoji": "🥛", "description": "優しい甘さの定番ラテ", "category": "Coffee" },
            { "name": "アメリカーノ", "price": 420, "emoji": "☕", "description": "すっきりした味わい", "category": "Coffee" },
            { "name": "アーモンドクッキー", "price": 230, "emoji": "🌰", "description": "香ばしさが特徴", "category": "Sweets" },
            { "name": "ベイクドチーズケーキ", "price": 300, "emoji": "🧀", "description": "濃厚ミニケーキ", "category": "Sweets" },
            { "name": "ミニサンド（ハム）", "price": 510, "emoji": "🥪", "description": "軽食にぴったり", "category": "Set" },
            { "name": "ヨーグルトカップ", "price": 350, "emoji": "🥣", "description": "小腹満たしに", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "カフェラテ40円オフ", "discount": 40 }]
    },
    {
        "id": 93,
        "name": "Kichijoji North Exit Light Lounge",
        "image": "💡",
        "atmosphere": "北口ロータリー横で初めてでも見つけやすい",
        "station": "吉祥寺駅",
        "coordinates": { "lat": 35.7054, "lng": 139.5804 },
        "status": "open",
        "distance": 2,
        "features": ["北口ロータリー", "視界が開けている", "短時間利用OK"],
        "menu": [
            { "name": "モーニングブレンド", "price": 430, "emoji": "☕", "description": "朝向けの軽い味", "category": "Coffee" },
            { "name": "アイスティー", "price": 390, "emoji": "🧋", "description": "さっぱりした香り", "category": "Tea" },
            { "name": "バナナブレッド", "price": 260, "emoji": "🍌", "description": "しっとり甘い", "category": "Sweets" },
            { "name": "キャラメルマフィン", "price": 270, "emoji": "🧁", "description": "ほんのり香ばしい", "category": "Sweets" },
            { "name": "ミニサンド（チキン）", "price": 540, "emoji": "🍗", "description": "軽く食べられる", "category": "Set" },
            { "name": "グリーンサラダ", "price": 370, "emoji": "🥗", "description": "軽めのヘルシー食", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "バナナブレッド20円オフ", "discount": 20 }]
    },
    {
        "id": 94,
        "name": "Akihabara Electric Gate Cafe",
        "image": "⚡",
        "atmosphere": "電気街口の中央で迷わず集合できる",
        "station": "秋葉原駅",
        "coordinates": { "lat": 35.6984, "lng": 139.7731 },
        "status": "open",
        "distance": 1,
        "features": ["電気街口すぐ", "視認性◎", "テイクアウト向き"],
        "menu": [
            { "name": "アキバブレンド", "price": 440, "emoji": "☕", "description": "飲みやすい深煎り", "category": "Coffee" },
            { "name": "アイスラテ", "price": 480, "emoji": "🧊", "description": "まろやかな甘さ", "category": "Coffee" },
            { "name": "チョコスコーン", "price": 250, "emoji": "🍫", "description": "ほどよい甘さ", "category": "Sweets" },
            { "name": "クランベリーマフィン", "price": 260, "emoji": "🫐", "description": "甘酸っぱさが魅力", "category": "Sweets" },
            { "name": "ミニサンド（ツナ）", "price": 510, "emoji": "🐟", "description": "あっさり系", "category": "Set" },
            { "name": "ヘルシーボウル", "price": 360, "emoji": "🥣", "description": "軽めに食べたい時に", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "チョコスコーン25円オフ", "discount": 25 }]
    },
    {
        "id": 95,
        "name": "Akihabara Crossfield Meeting Cafe",
        "image": "🏙️",
        "atmosphere": "クロスフィールド前で広く人を見つけやすい",
        "station": "秋葉原駅",
        "coordinates": { "lat": 35.6980, "lng": 139.7741 },
        "status": "open",
        "distance": 3,
        "features": ["広場あり", "人が迷わない", "落ち着いた空間"],
        "menu": [
            { "name": "シティブレンド", "price": 450, "emoji": "☕", "description": "クセの少ない味", "category": "Coffee" },
            { "name": "ミルクティー", "price": 420, "emoji": "🧋", "description": "やさしい甘さ", "category": "Tea" },
            { "name": "バタービスケット", "price": 240, "emoji": "🧈", "description": "香り豊か", "category": "Sweets" },
            { "name": "ストロベリーケーキ", "price": 300, "emoji": "🍓", "description": "軽い食感", "category": "Sweets" },
            { "name": "ミニサンド（チーズ）", "price": 520, "emoji": "🧀", "description": "ちょうど良い大きさ", "category": "Set" },
            { "name": "サラダプレート", "price": 380, "emoji": "🥗", "description": "軽食にも最適", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "ミルクティー35円オフ", "discount": 35 }]
    },
    {
        "id": 96,
        "name": "Akihabara Showroom Front Stand",
        "image": "💻",
        "atmosphere": "大きなショールーム前で目印がわかりやすい",
        "station": "秋葉原駅",
        "coordinates": { "lat": 35.6970, "lng": 139.7726 },
        "status": "open",
        "distance": 2,
        "features": ["特徴的な目印", "初見でも安心", "短時間利用OK"],
        "menu": [
            { "name": "ライトロースト", "price": 430, "emoji": "☕", "description": "軽い口当たり", "category": "Coffee" },
            { "name": "アイスアメリカーノ", "price": 420, "emoji": "🧊", "description": "さっぱりとした苦味", "category": "Coffee" },
            { "name": "チョコクッキー", "price": 220, "emoji": "🍪", "description": "定番の甘さ", "category": "Sweets" },
            { "name": "ミニアップルパイ", "price": 280, "emoji": "🍎", "description": "小さくて食べやすい", "category": "Sweets" },
            { "name": "ミニサンド（エッグ）", "price": 500, "emoji": "🥚", "description": "軽い食事に最適", "category": "Set" },
            { "name": "ゼリーカップ", "price": 320, "emoji": "🍊", "description": "さっぱりした甘さ", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "アップルパイ45円オフ", "discount": 45 }]
    },
    {
        "id": 97,
        "name": "Roppongi Hills View Cafe",
        "image": "🏙️",
        "atmosphere": "ヒルズ入口前でわかりやすく集合しやすい",
        "station": "六本木駅",
        "coordinates": { "lat": 35.6603, "lng": 139.7293 },
        "status": "open",
        "distance": 3,
        "features": ["ヒルズ近く", "視界が広い", "ゆったり空間"],
        "menu": [
            { "name": "ヒルズブレンド", "price": 480, "emoji": "☕", "description": "深みのある味わい", "category": "Coffee" },
            { "name": "カフェモカ", "price": 520, "emoji": "🍫", "description": "甘めの人気メニュー", "category": "Coffee" },
            { "name": "バターフィナンシェ", "price": 260, "emoji": "🧈", "description": "香り豊かな焼き菓子", "category": "Sweets" },
            { "name": "ラズベリーパウンド", "price": 280, "emoji": "🫐", "description": "甘酸っぱい味わい", "category": "Sweets" },
            { "name": "ミニサンド（ハーブチキン）", "price": 580, "emoji": "🍗", "description": "軽食向け", "category": "Set" },
            { "name": "ライトサラダ", "price": 380, "emoji": "🥗", "description": "軽めに済ませたい時に", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "カフェモカ60円オフ", "discount": 60 }]
    },
    {
        "id": 98,
        "name": "Roppongi Midtown Gate Stand",
        "image": "🎗️",
        "atmosphere": "ミッドタウン入口で集合しやすいランドマーク",
        "station": "六本木駅",
        "coordinates": { "lat": 35.6652, "lng": 139.7313 },
        "status": "open",
        "distance": 2,
        "features": ["ミッドタウン前", "迷いにくい", "短時間OK"],
        "menu": [
            { "name": "ミッドタウンブレンド", "price": 460, "emoji": "☕", "description": "飲みやすいコク", "category": "Coffee" },
            { "name": "ロイヤルミルクティー", "price": 480, "emoji": "🫖", "description": "深い香り", "category": "Tea" },
            { "name": "キャラメルクッキー", "price": 240, "emoji": "🍪", "description": "香ばしく甘い", "category": "Sweets" },
            { "name": "ミニチョコケーキ", "price": 280, "emoji": "🍫", "description": "小さめサイズ", "category": "Sweets" },
            { "name": "ミニサンド（ローストビーフ）", "price": 620, "emoji": "🥩", "description": "少量でも満足感◎", "category": "Set" },
            { "name": "サラダ＆チーズ", "price": 410, "emoji": "🧀", "description": "軽い組み合わせ", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "ロイヤルミルクティー50円オフ", "discount": 50 }]
    },
    {
        "id": 99,
        "name": "Roppongi Crossing Quick Cafe",
        "image": "🚦",
        "atmosphere": "交差点の大看板前で集合場所として超わかりやすい",
        "station": "六本木駅",
        "coordinates": { "lat": 35.6621, "lng": 139.7318 },
        "status": "open",
        "distance": 1,
        "features": ["交差点目の前", "初見OK", "サッと入れる"],
        "menu": [
            { "name": "クイックブレンド", "price": 450, "emoji": "☕", "description": "すぐ飲める軽さ", "category": "Coffee" },
            { "name": "アイスラテ", "price": 470, "emoji": "🧊", "description": "さっぱり系ラテ", "category": "Coffee" },
            { "name": "ビターチョコクッキー", "price": 230, "emoji": "🍫", "description": "甘さ控えめ", "category": "Sweets" },
            { "name": "レモンケーキ", "price": 270, "emoji": "🍋", "description": "爽やかで軽い", "category": "Sweets" },
            { "name": "ミニサンド（ポテトサラダ）", "price": 520, "emoji": "🥔", "description": "軽い食感", "category": "Set" },
            { "name": "ゼリーミックス", "price": 300, "emoji": "🍇", "description": "みずみずしい味", "category": "LightMeal" }
        ],
        "coupons": [{ "name": "レモンケーキ30円オフ", "discount": 30 }]
    },
    {
        "id": 100,
        "name": "Nakano North Deck Cafe",
        "image": "🌤️",
        "atmosphere": "北口の広場前で集合しやすい開放的カフェ",
        "station": "中野駅",
        "coordinates": { "lat": 35.7060, "lng": 139.6658 },
        "status": "open",
        "distance": 2,
        "features": ["北口広場近く", "見つけやすい", "短時間利用OK"],
        "menu": [
            { "name": "ナカノブレンド", "price": 430, "emoji": "☕", "description": "軽めのコク", "category": "Coffee" },
            { "name": "アイスミルクティー", "price": 450, "emoji": "🧋", "description": "すっきり甘め", "category": "Tea" },
            { "name": "ココアマフィン", "price": 260, "emoji": "🧁", "description": "ふんわり甘い", "category": "Sweets" },
            { "name": "ミニサンド（ベジ）", "price": 520, "emoji": "🥬", "description": "軽い味わい", "category": "Set" }
        ],
        "coupons": [
            { "name": "焼き菓子50円オフ", "discount": 50 },
            { "name": "紅茶30円オフ", "discount": 30 }
        ]
    },
    {
        "id": 101,
        "name": "Nakano South Alley Stand",
        "image": "🏘️",
        "atmosphere": "南口の細道沿いで落ち着いた合流スポット",
        "station": "中野駅",
        "coordinates": { "lat": 35.7039, "lng": 139.6662 },
        "status": "open",
        "distance": 3,
        "features": ["小道沿い", "静か", "待ち合わせしやすい"],
        "menu": [
            { "name": "ミディアムロースト", "price": 440, "emoji": "☕", "description": "ほどよい苦味", "category": "Coffee" },
            { "name": "レモンティー", "price": 420, "emoji": "🍋", "description": "爽やかな香り", "category": "Tea" },
            { "name": "ベリースコーン", "price": 270, "emoji": "🫐", "description": "甘酸っぱさが◎", "category": "Sweets" },
            { "name": "ミニサンド（タマゴ）", "price": 500, "emoji": "🥚", "description": "朝食にも", "category": "Set" }
        ],
        "coupons": [
            { "name": "スコーン20円オフ", "discount": 20 },
            { "name": "ホットドリンク40円オフ", "discount": 40 }
        ]
    },
    {
        "id": 102,
        "name": "Nakano Broadway Entrance Meet Cafe",
        "image": "🛍️",
        "atmosphere": "ブロードウェイ入口で目印がはっきりしていて集合に最適",
        "station": "中野駅",
        "coordinates": { "lat": 35.7065, "lng": 139.6652 },
        "status": "open",
        "distance": 1,
        "features": ["商店街入口", "初見でも安心", "テイクアウト有"],
        "menu": [
            { "name": "ライトブレンド", "price": 420, "emoji": "☕", "description": "あっさりした味", "category": "Coffee" },
            { "name": "ジンジャーティー", "price": 430, "emoji": "🫚", "description": "身体が温まる", "category": "Tea" },
            { "name": "キャラメルケーキ", "price": 280, "emoji": "🍮", "description": "まろやか甘さ", "category": "Sweets" },
            { "name": "ミニサンド（チキン）", "price": 540, "emoji": "🍗", "description": "食べ応えあり", "category": "Set" }
        ],
        "coupons": [
            { "name": "ケーキ類35円オフ", "discount": 35 },
            { "name": "ホットティー25円オフ", "discount": 25 }
        ]
    },
    {
        "id": 103,
        "name": "Koenji Station Front Light Cafe",
        "image": "🎏",
        "atmosphere": "北口ロータリー前で目立つ立地。集合に最適",
        "station": "高円寺駅",
        "coordinates": { "lat": 35.7051, "lng": 139.6493 },
        "status": "open",
        "distance": 1,
        "features": ["ロータリー前", "見つけやすい", "明るい空間"],
        "menu": [
            { "name": "コウエンジブレンド", "price": 430, "emoji": "☕", "description": "すっきりした苦味", "category": "Coffee" },
            { "name": "アイスティー", "price": 390, "emoji": "🧋", "description": "さっぱり味", "category": "Tea" },
            { "name": "シナモンクッキー", "price": 230, "emoji": "🌿", "description": "香り高い", "category": "Sweets" },
            { "name": "ミニサンド（ポテト）", "price": 500, "emoji": "🥔", "description": "軽めの食事向け", "category": "Set" }
        ],
        "coupons": [
            { "name": "焼き菓子30円オフ", "discount": 30 },
            { "name": "アイスドリンク40円オフ", "discount": 40 }
        ]
    },
    {
        "id": 104,
        "name": "Koenji Look Street Stand",
        "image": "🛤️",
        "atmosphere": "ルック商店街入口でわかりやすい待ち合わせ場所",
        "station": "高円寺駅",
        "coordinates": { "lat": 35.7035, "lng": 139.6482 },
        "status": "open",
        "distance": 3,
        "features": ["商店街入口", "落ち着いた雰囲気", "視認性◎"],
        "menu": [
            { "name": "ミルドブレンド", "price": 440, "emoji": "☕", "description": "飲みやすい深み", "category": "Coffee" },
            { "name": "ハーブティー", "price": 420, "emoji": "🌿", "description": "香りの良さが特徴", "category": "Tea" },
            { "name": "オレンジケーキ", "price": 270, "emoji": "🍊", "description": "さっぱりした甘さ", "category": "Sweets" },
            { "name": "ミニサンド（ハム）", "price": 510, "emoji": "🥪", "description": "定番の味わい", "category": "Set" }
        ],
        "coupons": [
            { "name": "ケーキ類45円オフ", "discount": 45 },
            { "name": "ハーブティー30円オフ", "discount": 30 }
        ]
    },
    {
        "id": 105,
        "name": "Koenji South Gate Small Lounge",
        "image": "🌙",
        "atmosphere": "南口の商店街入口にあり落ち着いて集合できる",
        "station": "高円寺駅",
        "coordinates": { "lat": 35.7029, "lng": 139.6496 },
        "status": "open",
        "distance": 2,
        "features": ["南口商店街", "落ち着いた内装", "短時間滞在◎"],
        "menu": [
            { "name": "ライトロースト", "price": 420, "emoji": "☕", "description": "あっさり飲みやすい", "category": "Coffee" },
            { "name": "アップルティー", "price": 430, "emoji": "🍎", "description": "優しいフルーツの香り", "category": "Tea" },
            { "name": "カスタードプリン", "price": 260, "emoji": "🍮", "description": "やわらかい甘さ", "category": "Sweets" },
            { "name": "ミニサンド（サーモン）", "price": 560, "emoji": "🐟", "description": "ちょいリッチ", "category": "Set" }
        ],
        "coupons": [
            { "name": "プリン20円オフ", "discount": 20 },
            { "name": "フルーツティー35円オフ", "discount": 35 }
        ]
    },
    {
        "id": 106,
        "name": "Meguro Station Front Meet Cafe",
        "image": "🌼",
        "atmosphere": "駅前の広い歩道で待ち合わせしやすい定番カフェ",
        "station": "目黒駅",
        "coordinates": { "lat": 35.6339, "lng": 139.7156 },
        "status": "open",
        "distance": 1,
        "features": ["駅前広い", "人を見つけやすい", "テイクアウト可"],
        "menu": [
            { "name": "メグロブレンド", "price": 450, "emoji": "☕", "description": "ほのかな甘み", "category": "Coffee" },
            { "name": "ミントティー", "price": 430, "emoji": "🌱", "description": "爽快な香り", "category": "Tea" },
            { "name": "ショートケーキ", "price": 300, "emoji": "🍰", "description": "軽い口当たり", "category": "Sweets" },
            { "name": "ミニサンド（チキン）", "price": 580, "emoji": "🍗", "description": "食べ応えあり", "category": "Set" }
        ],
        "coupons": [
            { "name": "紅茶50円オフ", "discount": 50 },
            { "name": "スイーツ40円オフ", "discount": 40 }
        ]
    },
    {
        "id": 107,
        "name": "Meguro River Side Cafe",
        "image": "🌊",
        "atmosphere": "川沿いで静かに集合しやすい穴場スポット",
        "station": "目黒駅",
        "coordinates": { "lat": 35.6308, "lng": 139.7138 },
        "status": "open",
        "distance": 3,
        "features": ["川沿い", "静か", "視界が広い"],
        "menu": [
            { "name": "リバーサイドブレンド", "price": 460, "emoji": "☕", "description": "穏やかな味わい", "category": "Coffee" },
            { "name": "ハニーティー", "price": 440, "emoji": "🍯", "description": "ほんのり甘い", "category": "Tea" },
            { "name": "バタークッキー", "price": 250, "emoji": "🧈", "description": "濃厚で香ばしい", "category": "Sweets" },
            { "name": "ミニサンド（タマゴ）", "price": 520, "emoji": "🥚", "description": "軽食に最適", "category": "Set" }
        ],
        "coupons": [
            { "name": "ホットティー30円オフ", "discount": 30 },
            { "name": "クッキー15円オフ", "discount": 15 }
        ]
    },
    {
        "id": 108,
        "name": "Meguro East Hills Terrace",
        "image": "⛰️",
        "atmosphere": "坂の上のテラスで人通りが少なく合流しやすい",
        "station": "目黒駅",
        "coordinates": { "lat": 35.6355, "lng": 139.7170 },
        "status": "open",
        "distance": 4,
        "features": ["坂上テラス", "落ち着いた空気", "集合しやすい"],
        "menu": [
            { "name": "テラスブレンド", "price": 460, "emoji": "☕", "description": "深みのある味", "category": "Coffee" },
            { "name": "アップルジンジャーティー", "price": 450, "emoji": "🍎", "description": "香り豊かで温まる", "category": "Tea" },
            { "name": "ベリータルト", "price": 300, "emoji": "🫐", "description": "甘酸っぱい味わい", "category": "Sweets" },
            { "name": "ミニサンド（ベジ＆チーズ）", "price": 550, "emoji": "🧀", "description": "軽いけど満足感あり", "category": "Set" }
        ],
        "coupons": [
            { "name": "タルト25円オフ", "discount": 25 },
            { "name": "ホットドリンク50円オフ", "discount": 50 }
        ]
    },
    {
        "id": 109,
        "name": "Yoyogi Station Front Light Cafe",
        "image": "🌤️",
        "atmosphere": "代々木駅前で明るく待ち合わせしやすいカフェ",
        "station": "代々木駅",
        "coordinates": { "lat": 35.6833, "lng": 139.7024 },
        "status": "open",
        "distance": 1,
        "features": ["駅前", "明るい", "短時間向け"],
        "menu": [
            { "name": "ライトカフェラテ", "price": 450, "emoji": "☕", "description": "軽めのラテ", "category": "Coffee" },
            { "name": "レーズンクッキー", "price": 240, "emoji": "🍪", "description": "素朴な甘さ", "category": "Sweets" },
            { "name": "ミニベーグルセット", "price": 580, "emoji": "🥯", "description": "軽食に最適", "category": "Set" }
        ],
        "coupons": [
            { "name": "ラテ40円オフ", "discount": 40 },
            { "name": "クッキー15円オフ", "discount": 15 }
        ]
    },
    {
        "id": 110,
        "name": "Yoyogi East Gate Small Cafe",
        "image": "🍃",
        "atmosphere": "東口から近く落ち着いた待ち合わせ向けの小型カフェ",
        "station": "代々木駅",
        "coordinates": { "lat": 35.6839, "lng": 139.7028 },
        "status": "open",
        "distance": 2,
        "features": ["静かめ", "隠れ家", "会話向け"],
        "menu": [
            { "name": "アールグレイティー", "price": 430, "emoji": "🫖", "description": "香り高い", "category": "Tea" },
            { "name": "バナナマフィン", "price": 320, "emoji": "🧁", "description": "しっとり甘い", "category": "Sweets" },
            { "name": "ミニメルトサンド", "price": 620, "emoji": "🥪", "description": "とろける軽食", "category": "Food" }
        ],
        "coupons": [{ "name": "ティー20円オフ", "discount": 20 }]
    },
    {
        "id": 111,
        "name": "Yoyogi Parkside Coffee Base",
        "image": "🌳",
        "atmosphere": "公園近くの開放的な空間で合流しやすいカフェ",
        "station": "代々木駅",
        "coordinates": { "lat": 35.6828, "lng": 139.7032 },
        "status": "open",
        "distance": 4,
        "features": ["公園近く", "開放的", "リラックス"],
        "menu": [
            { "name": "アメリカーノ", "price": 430, "emoji": "☕", "description": "すっきり味", "category": "Coffee" },
            { "name": "アーモンドケーキ", "price": 310, "emoji": "🍰", "description": "軽い甘さ", "category": "Sweets" },
            { "name": "ヘルシーサラダセット", "price": 680, "emoji": "🥗", "description": "軽めランチに", "category": "Set" }
        ],
        "coupons": [{ "name": "アメリカーノ30円オフ", "discount": 30 }]
    },
    {
        "id": 112,
        "name": "Yoyogi Quiet Meeting Lounge",
        "image": "🕊️",
        "atmosphere": "静かなラウンジ風、打ち合わせにも向く空間",
        "station": "代々木駅",
        "coordinates": { "lat": 35.6830, "lng": 139.7019 },
        "status": "open",
        "distance": 4,
        "features": ["静か", "電源あり", "会話向け"],
        "menu": [
            { "name": "ほうじ茶ラテ", "price": 480, "emoji": "🍵", "description": "香ばしい風味", "category": "Tea" },
            { "name": "チョコスコーン", "price": 300, "emoji": "🍪", "description": "甘さと食感", "category": "Sweets" },
            { "name": "トマトスープセット", "price": 720, "emoji": "🍲", "description": "温かい軽食", "category": "Set" }
        ],
        "coupons": [
            { "name": "ラテ40円オフ", "discount": 40 },
            { "name": "スコーン20円オフ", "discount": 20 }
        ]
    },
    {
        "id": 113,
        "name": "Omotesando Soft Light Cafe",
        "image": "✨",
        "atmosphere": "自然光が入り待ち合わせに使いやすい洗練カフェ",
        "station": "表参道駅",
        "coordinates": { "lat": 35.6644, "lng": 139.7123 },
        "status": "open",
        "distance": 3,
        "features": ["光が綺麗", "落ち着く", "入りやすい"],
        "menu": [
            { "name": "カフェモカ", "price": 560, "emoji": "☕🍫", "description": "甘めで濃厚", "category": "Coffee" },
            { "name": "レモンタルト", "price": 350, "emoji": "🍋", "description": "爽やか酸味", "category": "Sweets" },
            { "name": "ライトサンドセット", "price": 720, "emoji": "🥪", "description": "軽い食事", "category": "Set" }
        ],
        "coupons": [{ "name": "モカ50円オフ", "discount": 50 }]
    },
    {
        "id": 114,
        "name": "Omotesando Hidden Alley Cafe",
        "image": "🌼",
        "atmosphere": "裏路地にある隠れ家カフェでゆっくり合流できる",
        "station": "表参道駅",
        "coordinates": { "lat": 35.6647, "lng": 139.7129 },
        "status": "open",
        "distance": 2,
        "features": ["隠れ家", "静か", "ゆったり"],
        "menu": [
            { "name": "フラットホワイト", "price": 520, "emoji": "🥛☕", "description": "なめらか", "category": "Coffee" },
            { "name": "ラズベリーケーキ", "price": 340, "emoji": "🍰", "description": "甘酸っぱい", "category": "Sweets" },
            { "name": "ミートトースト", "price": 650, "emoji": "🍞", "description": "満足感あり", "category": "Food" }
        ],
        "coupons": [{ "name": "ケーキ30円オフ", "discount": 30 }]
    },
    {
        "id": 115,
        "name": "Omotesando Terrace Breeze",
        "image": "🌬️",
        "atmosphere": "テラス席のある開放的な待ち合わせ向けカフェ",
        "station": "表参道駅",
        "coordinates": { "lat": 35.6650, "lng": 139.7126 },
        "status": "open",
        "distance": 4,
        "features": ["テラス席", "開放的", "会話がしやすい"],
        "menu": [
            { "name": "アメリカーノ", "price": 470, "emoji": "☕", "description": "すっきり味", "category": "Coffee" },
            { "name": "抹茶スコーン", "price": 320, "emoji": "🍵", "description": "ほんのり苦味", "category": "Sweets" },
            { "name": "朝のスープセット", "price": 730, "emoji": "🍲", "description": "軽いモーニング", "category": "Set" }
        ],
        "coupons": [{ "name": "スコーン20円オフ", "discount": 20 }]
    },
    {
        "id": 116,
        "name": "Omotesando Relax Lounge",
        "image": "🪴",
        "atmosphere": "落ち着くラウンジ風で打ち合わせに使いやすい",
        "station": "表参道駅",
        "coordinates": { "lat": 35.6642, "lng": 139.7134 },
        "status": "open",
        "distance": 3,
        "features": ["ラウンジ風", "静か", "落ち着く"],
        "menu": [
            { "name": "柚子ティー", "price": 460, "emoji": "🍊🫖", "description": "香り高いハーブ系", "category": "Tea" },
            { "name": "バニラマドレーヌ", "price": 290, "emoji": "🍰", "description": "やさしい甘さ", "category": "Sweets" },
            { "name": "ミニプレートセット", "price": 760, "emoji": "🍽️", "description": "ちょい食べに最適", "category": "Set" }
        ],
        "coupons": [{ "name": "ティー25円オフ", "discount": 25 }]
    },
    {
        "id": 117,
        "name": "Akabane Station Square Cafe",
        "image": "🚉",
        "atmosphere": "駅前広場に面した待ち合わせ向けカフェ",
        "station": "赤羽駅",
        "coordinates": { "lat": 35.7770, "lng": 139.7205 },
        "status": "open",
        "distance": 1,
        "features": ["駅前", "見つけやすい", "回転が速い"],
        "menu": [
            { "name": "ミルクコーヒー", "price": 400, "emoji": "🥛☕", "description": "まろやか", "category": "Coffee" },
            { "name": "シュガードーナツ", "price": 210, "emoji": "🍩", "description": "軽めスイーツ", "category": "Sweets" },
            { "name": "チーズミニサンド", "price": 560, "emoji": "🥪", "description": "軽食に最適", "category": "Food" }
        ],
        "coupons": [{ "name": "ドーナツ15円オフ", "discount": 15 }]
    },
    {
        "id": 118,
        "name": "Akabane Cozy Street Cafe",
        "image": "🏠",
        "atmosphere": "表通りから少し入った落ち着くカフェ",
        "station": "赤羽駅",
        "coordinates": { "lat": 35.7773, "lng": 139.7202 },
        "status": "open",
        "distance": 2,
        "features": ["静か", "落ち着く", "会話向け"],
        "menu": [
            { "name": "ほうじ茶ラテ", "price": 480, "emoji": "🍵", "description": "香ばしい甘さ", "category": "Tea" },
            { "name": "キャラメルブラウニー", "price": 320, "emoji": "🍫", "description": "濃厚甘め", "category": "Sweets" },
            { "name": "スーププレート", "price": 700, "emoji": "🍲", "description": "軽食にぴったり", "category": "Food" }
        ],
        "coupons": [{ "name": "ブラウニー25円オフ", "discount": 25 }]
    },
    {
        "id": 119,
        "name": "Akabane Riverside Breeze Cafe",
        "image": "🌊",
        "atmosphere": "川沿いで静かに合流できる開放カフェ",
        "station": "赤羽駅",
        "coordinates": { "lat": 35.7780, "lng": 139.7210 },
        "status": "open",
        "distance": 4,
        "features": ["景色良い", "開放的", "ゆっくり話せる"],
        "menu": [
            { "name": "レモンティー", "price": 430, "emoji": "🍋🫖", "description": "すっきり香り高い", "category": "Tea" },
            { "name": "オートミールクッキー", "price": 280, "emoji": "🍪", "description": "健康系スイーツ", "category": "Sweets" },
            { "name": "ライトパスタセット", "price": 760, "emoji": "🍝", "description": "軽いランチ", "category": "Food" }
        ],
        "coupons": [{ "name": "クッキー20円オフ", "discount": 20 }]
    },
    {
        "id": 120,
        "name": "Akabane East Gate Gathering Cafe",
        "image": "🌅",
        "atmosphere": "東口すぐの集合しやすいカフェ",
        "station": "赤羽駅",
        "coordinates": { "lat": 35.7769, "lng": 139.7209 },
        "status": "open",
        "distance": 1,
        "features": ["東口近い", "明るい", "入りやすい"],
        "menu": [
            { "name": "アッサムティー", "price": 420, "emoji": "🫖", "description": "しっかり香る", "category": "Tea" },
            { "name": "アーモンドタルト", "price": 330, "emoji": "🍰", "description": "香ばしい甘さ", "category": "Sweets" },
            { "name": "ベジタブルミニサンド", "price": 600, "emoji": "🥗🥪", "description": "ヘルシー", "category": "Food" }
        ],
        "coupons": [{ "name": "タルト30円オフ", "discount": 30 }]
    },
    {
        "id": 121,
        "name": "Oimachi Station Front Blend Cafe",
        "image": "🌤️",
        "atmosphere": "大井町駅前で合流しやすく気軽に使えるカフェ",
        "station": "大井町駅",
        "coordinates": { "lat": 35.6057, "lng": 139.7345 },
        "status": "open",
        "distance": 1,
        "features": ["駅前", "入りやすい", "短時間向け"],
        "menu": [
            { "name": "ブレンドコーヒー", "price": 420, "emoji": "☕", "description": "スタンダードな味", "category": "Coffee" },
            { "name": "シュガークッキー", "price": 220, "emoji": "🍪", "description": "ほんのり甘い", "category": "Sweets" },
            { "name": "チーズサンドセット", "price": 620, "emoji": "🥪", "description": "軽食に最適", "category": "Set" }
        ],
        "coupons": [{ "name": "コーヒー30円オフ", "discount": 30 }]
    },
    {
        "id": 122,
        "name": "Oimachi South Terrace Cafe",
        "image": "☀️",
        "atmosphere": "南側のテラスで開放感がある待ち合わせ向けカフェ",
        "station": "大井町駅",
        "coordinates": { "lat": 35.6053, "lng": 139.7341 },
        "status": "open",
        "distance": 2,
        "features": ["テラス席", "開放感", "会話がしやすい"],
        "menu": [
            { "name": "カフェラテ", "price": 480, "emoji": "☕", "description": "まろやか", "category": "Coffee" },
            { "name": "ベリーマフィン", "price": 330, "emoji": "🧁", "description": "甘酸っぱい", "category": "Sweets" },
            { "name": "スープセット", "price": 700, "emoji": "🍲", "description": "軽食に良い", "category": "Set" }
        ],
        "coupons": [{ "name": "ラテ40円オフ", "discount": 40 }]
    },
    {
        "id": 123,
        "name": "Oimachi Backstreet Chill Cafe",
        "image": "🌙",
        "atmosphere": "裏道にある静かな落ち着けるカフェ",
        "station": "大井町駅",
        "coordinates": { "lat": 35.6051, "lng": 139.7350 },
        "status": "open",
        "distance": 3,
        "features": ["静か", "落ち着く", "隠れ家"],
        "menu": [
            { "name": "ほうじ茶", "price": 390, "emoji": "🍵", "description": "香ばしい味", "category": "Tea" },
            { "name": "チョコタルト", "price": 320, "emoji": "🍫", "description": "濃厚甘め", "category": "Sweets" },
            { "name": "ホットサンド", "price": 650, "emoji": "🥪", "description": "温かい軽食", "category": "Food" }
        ],
        "coupons": [{ "name": "タルト25円オフ", "discount": 25 }]
    },
    {
        "id": 124,
        "name": "Oimachi North Meeting Lounge",
        "image": "🕊️",
        "atmosphere": "静かな北側のラウンジ風カフェで合流向き",
        "station": "大井町駅",
        "coordinates": { "lat": 35.6060, "lng": 139.7348 },
        "status": "open",
        "distance": 4,
        "features": ["ラウンジ風", "静か", "会話向け"],
        "menu": [
            { "name": "アールグレイ", "price": 430, "emoji": "🫖", "description": "香る紅茶", "category": "Tea" },
            { "name": "レモンケーキ", "price": 310, "emoji": "🍋", "description": "爽やかな甘さ", "category": "Sweets" },
            { "name": "サラダプレート", "price": 720, "emoji": "🥗", "description": "ヘルシー軽食", "category": "Food" }
        ],
        "coupons": [{ "name": "紅茶30円オフ", "discount": 30 }]
    },
    {
        "id": 125,
        "name": "Musashikosugi Urban Gate Cafe",
        "image": "🏙️",
        "atmosphere": "駅近の都会的で待ち合わせしやすいカフェ",
        "station": "武蔵小杉駅",
        "coordinates": { "lat": 35.5766, "lng": 139.6541 },
        "status": "open",
        "distance": 2,
        "features": ["駅近", "入りやすい", "短時間向け"],
        "menu": [
            { "name": "アメリカーノ", "price": 450, "emoji": "☕", "description": "すっきり味", "category": "Coffee" },
            { "name": "シナモンロール", "price": 340, "emoji": "🥮", "description": "香り高い甘さ", "category": "Sweets" },
            { "name": "ベジタブルサンド", "price": 620, "emoji": "🥗🥪", "description": "軽い味", "category": "Food" }
        ],
        "coupons": [{ "name": "ロール20円オフ", "discount": 20 }]
    },
    {
        "id": 126,
        "name": "Musashikosugi South Court Cafe",
        "image": "☕",
        "atmosphere": "南側で静かに待ち合わせができる落ち着いたカフェ",
        "station": "武蔵小杉駅",
        "coordinates": { "lat": 35.5764, "lng": 139.6544 },
        "status": "open",
        "distance": 3,
        "features": ["静か", "落ち着いた空間", "会話向け"],
        "menu": [
            { "name": "ミルクティー", "price": 430, "emoji": "🫖", "description": "まろやか香り高い", "category": "Tea" },
            { "name": "バターケーキ", "price": 300, "emoji": "🍰", "description": "しっとり甘い", "category": "Sweets" },
            { "name": "ミニプレート", "price": 720, "emoji": "🍽️", "description": "軽めの食事", "category": "Food" }
        ],
        "coupons": [{ "name": "ケーキ25円オフ", "discount": 25 }]
    },
    {
        "id": 127,
        "name": "Musashikosugi Tower Front Cafe",
        "image": "🏢",
        "atmosphere": "タワー前で待ち合わせしやすい便利な立地",
        "station": "武蔵小杉駅",
        "coordinates": { "lat": 35.5768, "lng": 139.6537 },
        "status": "open",
        "distance": 1,
        "features": ["タワー前", "見つけやすい", "短時間向け"],
        "menu": [
            { "name": "ライトラテ", "price": 460, "emoji": "☕", "description": "軽い飲み口", "category": "Coffee" },
            { "name": "チョコマフィン", "price": 310, "emoji": "🧁", "description": "濃厚", "category": "Sweets" },
            { "name": "スープセット", "price": 700, "emoji": "🍲", "description": "温まる軽食", "category": "Food" }
        ],
        "coupons": [{ "name": "ラテ40円オフ", "discount": 40 }]
    },
    {
        "id": 128,
        "name": "Musashikosugi Parkside Meeting Cafe",
        "image": "🌲",
        "atmosphere": "公園近くで合流しやすいリラックスカフェ",
        "station": "武蔵小杉駅",
        "coordinates": { "lat": 35.5770, "lng": 139.6548 },
        "status": "open",
        "distance": 4,
        "features": ["公園近く", "開放感", "話しやすい"],
        "menu": [
            { "name": "カモミールティー", "price": 420, "emoji": "🌼🫖", "description": "落ち着く香り", "category": "Tea" },
            { "name": "アップルパイ", "price": 340, "emoji": "🥧", "description": "甘酸っぱい風味", "category": "Sweets" },
            { "name": "モーニングトースト", "price": 600, "emoji": "🍞", "description": "朝に最適", "category": "Food" }
        ],
        "coupons": [{ "name": "パイ25円オフ", "discount": 25 }]
    },
    {
        "id": 129,
        "name": "Kameido Station Quick Cafe",
        "image": "🚉",
        "atmosphere": "駅前で待ち合わせしやすいクイックカフェ",
        "station": "亀戸駅",
        "coordinates": { "lat": 35.6972, "lng": 139.8262 },
        "status": "open",
        "distance": 1,
        "features": ["駅前", "回転速い", "入りやすい"],
        "menu": [
            { "name": "ブレンドコーヒー", "price": 410, "emoji": "☕", "description": "飲みやすい味", "category": "Coffee" },
            { "name": "チョコチップクッキー", "price": 230, "emoji": "🍪", "description": "甘い香り", "category": "Sweets" },
            { "name": "ミニサンドセット", "price": 600, "emoji": "🥪", "description": "軽めのセット", "category": "Food" }
        ],
        "coupons": [{ "name": "コーヒー20円オフ", "discount": 20 }]
    },
    {
        "id": 130,
        "name": "Kameido West Cozy Spot",
        "image": "🌙",
        "atmosphere": "西側の落ち着く静かなスモールカフェ",
        "station": "亀戸駅",
        "coordinates": { "lat": 35.6975, "lng": 139.8257 },
        "status": "open",
        "distance": 3,
        "features": ["静かめ", "落ち着く", "会話向け"],
        "menu": [
            { "name": "紅茶", "price": 380, "emoji": "🫖", "description": "飲みやすい紅茶", "category": "Tea" },
            { "name": "レモンクレープ", "price": 310, "emoji": "🍋🥞", "description": "爽やか甘さ", "category": "Sweets" },
            { "name": "サラダセット", "price": 720, "emoji": "🥗", "description": "軽いランチ", "category": "Set" }
        ],
        "coupons": [{ "name": "クレープ25円オフ", "discount": 25 }]
    },
    {
        "id": 131,
        "name": "Kameido Sunlight Cafe",
        "image": "🌤️",
        "atmosphere": "陽当たりよく待ち合わせしやすいカフェ",
        "station": "亀戸駅",
        "coordinates": { "lat": 35.6971, "lng": 139.8267 },
        "status": "open",
        "distance": 2,
        "features": ["明るい", "入りやすい", "短時間向け"],
        "menu": [
            { "name": "アイスティー", "price": 420, "emoji": "🧊🫖", "description": "すっきり冷たい", "category": "Tea" },
            { "name": "黒糖マフィン", "price": 320, "emoji": "🧁", "description": "甘い香り", "category": "Sweets" },
            { "name": "シンプルトースト", "price": 550, "emoji": "🍞", "description": "軽い食事", "category": "Food" }
        ],
        "coupons": [{ "name": "マフィン20円オフ", "discount": 20 }]
    },
    {
        "id": 132,
        "name": "Kameido Riverside Lounge",
        "image": "🌊",
        "atmosphere": "川沿いの静かに話せるラウンジ風カフェ",
        "station": "亀戸駅",
        "coordinates": { "lat": 35.6978, "lng": 139.8269 },
        "status": "open",
        "distance": 4,
        "features": ["開放的", "静か", "会話に最適"],
        "menu": [
            { "name": "ゆずティー", "price": 430, "emoji": "🍊🫖", "description": "香りのよい柑橘", "category": "Tea" },
            { "name": "バナナパウンド", "price": 310, "emoji": "🍌🍰", "description": "優しい甘味", "category": "Sweets" },
            { "name": "軽めプレート", "price": 720, "emoji": "🍽️", "description": "軽食に最適", "category": "Food" }
        ],
        "coupons": [{ "name": "パウンド25円オフ", "discount": 25 }]
    },
    {
        "id": 133,
        "name": "Kinshicho Station Meet Cafe",
        "image": "🚉",
        "atmosphere": "駅前すぐで集合しやすいカフェ",
        "station": "錦糸町駅",
        "coordinates": { "lat": 35.6970, "lng": 139.8130 },
        "status": "open",
        "distance": 1,
        "features": ["駅前", "見つけやすい", "短時間向け"],
        "menu": [
            { "name": "ライトカフェラテ", "price": 450, "emoji": "☕", "description": "軽めの味", "category": "Coffee" },
            { "name": "はちみつクッキー", "price": 250, "emoji": "🍪", "description": "甘すぎず食べやすい", "category": "Sweets" },
            { "name": "ミニホットサンド", "price": 630, "emoji": "🥪", "description": "温かい軽食", "category": "Food" }
        ],
        "coupons": [{ "name": "ラテ40円オフ", "discount": 40 }]
    },
    {
        "id": 134,
        "name": "Kinshicho North Quiet Cafe",
        "image": "🕊️",
        "atmosphere": "北口側の静けさが魅力の落ち着いたカフェ",
        "station": "錦糸町駅",
        "coordinates": { "lat": 35.6973, "lng": 139.8133 },
        "status": "open",
        "distance": 2,
        "features": ["静か", "落ち着く", "隠れ家"],
        "menu": [
            { "name": "ミルクティー", "price": 430, "emoji": "🫖", "description": "まろやか", "category": "Tea" },
            { "name": "抹茶フィナンシェ", "price": 300, "emoji": "🍵", "description": "香り豊か", "category": "Sweets" },
            { "name": "軽めミニセット", "price": 700, "emoji": "🍲", "description": "軽食向き", "category": "Food" }
        ],
        "coupons": [{ "name": "フィナンシェ20円オフ", "discount": 20 }]
    },
    {
        "id": 135,
        "name": "Kinshicho Terrace Light Cafe",
        "image": "✨",
        "atmosphere": "テラス席でゆったりできる待ち合わせ向けカフェ",
        "station": "錦糸町駅",
        "coordinates": { "lat": 35.6969, "lng": 139.8136 },
        "status": "open",
        "distance": 3,
        "features": ["テラス", "開放的", "会話向け"],
        "menu": [
            { "name": "アメリカーノ", "price": 450, "emoji": "☕", "description": "すっきり味", "category": "Coffee" },
            { "name": "バナナケーキ", "price": 320, "emoji": "🍌🍰", "description": "やさしい甘さ", "category": "Sweets" },
            { "name": "トーストセット", "price": 650, "emoji": "🍞", "description": "軽食に良い", "category": "Food" }
        ],
        "coupons": [{ "name": "ケーキ25円オフ", "discount": 25 }]
    },
    {
        "id": 136,
        "name": "Kinshicho East Relax Lounge",
        "image": "🪴",
        "atmosphere": "東側の静かで落ち着いたラウンジ風カフェ",
        "station": "錦糸町駅",
        "coordinates": { "lat": 35.6967, "lng": 139.8127 },
        "status": "open",
        "distance": 4,
        "features": ["静か", "ゆったり", "会話に最適"],
        "menu": [
            { "name": "カモミールティー", "price": 430, "emoji": "🌼🫖", "description": "落ち着く香り", "category": "Tea" },
            { "name": "オレンジパウンド", "price": 300, "emoji": "🍊🍰", "description": "爽やか甘い", "category": "Sweets" },
            { "name": "ヘルシープレート", "price": 730, "emoji": "🍽️", "description": "軽い食事", "category": "Food" }
        ],
        "coupons": [{ "name": "ティー20円オフ", "discount": 20 }]
    },
    {
        "id": 137,
        "name": "MonzenNakacho Station Front Cafe",
        "image": "🚉",
        "atmosphere": "駅前で合流しやすい明るいカフェ",
        "station": "門前仲町駅",
        "coordinates": { "lat": 35.6713, "lng": 139.7964 },
        "status": "open",
        "distance": 1,
        "features": ["駅前", "見つけやすい", "短時間向け"],
        "menu": [
            { "name": "カフェラテ", "price": 460, "emoji": "☕", "description": "まろやか", "category": "Coffee" },
            { "name": "クッキーサンド", "price": 260, "emoji": "🍪", "description": "軽い甘さ", "category": "Sweets" },
            { "name": "ミニセット", "price": 620, "emoji": "🥪", "description": "軽食", "category": "Food" }
        ],
        "coupons": [{ "name": "ラテ40円オフ", "discount": 40 }]
    },
    {
        "id": 138,
        "name": "MonzenNakacho Riverside Cafe",
        "image": "🌊",
        "atmosphere": "川沿いで落ち着く景色の良い待ち合わせ向けカフェ",
        "station": "門前仲町駅",
        "coordinates": { "lat": 35.6717, "lng": 139.7967 },
        "status": "open",
        "distance": 3,
        "features": ["景色良い", "静か", "会話向け"],
        "menu": [
            { "name": "アイスティー", "price": 430, "emoji": "🧊🫖", "description": "すっきり", "category": "Tea" },
            { "name": "バターケーキ", "price": 310, "emoji": "🍰", "description": "甘い風味", "category": "Sweets" },
            { "name": "パスタスモールセット", "price": 730, "emoji": "🍝", "description": "軽いパスタ", "category": "Set" }
        ],
        "coupons": [{ "name": "ケーキ20円オフ", "discount": 20 }]
    },
    {
        "id": 139,
        "name": "MonzenNakacho Hidden Lounge",
        "image": "🕊️",
        "atmosphere": "裏路地の静かな隠れ家ラウンジで合流に便利",
        "station": "門前仲町駅",
        "coordinates": { "lat": 35.6711, "lng": 139.7969 },
        "status": "open",
        "distance": 3,
        "features": ["隠れ家", "静か", "長居向け"],
        "menu": [
            { "name": "カモミールティー", "price": 420, "emoji": "🌼🫖", "description": "落ち着く香り", "category": "Tea" },
            { "name": "オートミールバー", "price": 300, "emoji": "🍪", "description": "優しい甘さ", "category": "Sweets" },
            { "name": "スープセット", "price": 700, "emoji": "🍲", "description": "軽めの食事", "category": "Set" }
        ],
        "coupons": [{ "name": "バー25円オフ", "discount": 25 }]
    },
    {
        "id": 140,
        "name": "MonzenNakacho Calm Street Cafe",
        "image": "🌿",
        "atmosphere": "落ち着いた通りにあるゆっくり話せるカフェ",
        "station": "門前仲町駅",
        "coordinates": { "lat": 35.6715, "lng": 139.7962 },
        "status": "open",
        "distance": 2,
        "features": ["静か", "ゆったり", "待ち合わせ向き"],
        "menu": [
            { "name": "ほうじ茶ラテ", "price": 450, "emoji": "🍵", "description": "香ばしい甘さ", "category": "Tea" },
            { "name": "パウンドケーキ", "price": 310, "emoji": "🍰", "description": "素朴な甘さ", "category": "Sweets" },
            { "name": "ミニトーストセット", "price": 640, "emoji": "🍞", "description": "軽い食事", "category": "Food" }
        ],
        "coupons": [{ "name": "ラテ35円オフ", "discount": 35 }]
    },
    {
        "id": 141,
        "name": "Yokohama Bayfront Light Cafe",
        "image": "🌊",
        "atmosphere": "横浜駅東口近くで海風を感じる明るいカフェ",
        "station": "横浜駅",
        "coordinates": { "lat": 35.4651, "lng": 139.6224 },
        "status": "open",
        "distance": 2,
        "features": ["海風", "開放的", "待ち合わせに最適"],
        "menu": [
            { "name": "ヨコハマブレンド", "price": 480, "emoji": "☕", "description": "軽いコク", "category": "Coffee" },
            { "name": "塩バタークッキー", "price": 260, "emoji": "🧈", "description": "ほんのり塩味", "category": "Sweets" },
            { "name": "ミニチキンサンド", "price": 560, "emoji": "🥪", "description": "軽めでも満足", "category": "Food" }
        ],
        "coupons": [{ "name": "焼き菓子50円オフ", "discount": 50 }]
    },
    {
        "id": 142,
        "name": "Yokohama North Gate Meet Spot",
        "image": "⛲",
        "atmosphere": "横浜駅北側の噴水前にある見つけやすいカフェ",
        "station": "横浜駅",
        "coordinates": { "lat": 35.4670, "lng": 139.6215 },
        "status": "open",
        "distance": 1,
        "features": ["噴水前", "わかりやすい", "短時間利用OK"],
        "menu": [
            { "name": "アメリカンコーヒー", "price": 420, "emoji": "☕", "description": "あっさり飲みやすい", "category": "Coffee" },
            { "name": "オレンジパウンド", "price": 300, "emoji": "🍊", "description": "爽やかな甘さ", "category": "Sweets" },
            { "name": "クリームチーズベーグル", "price": 610, "emoji": "🥯", "description": "濃厚クリーム", "category": "Food" }
        ]
    },
    {
        "id": 143,
        "name": "Yokohama South Terrace Cafe",
        "image": "🌴",
        "atmosphere": "南改札近くのテラス席が心地よい集合向けカフェ",
        "station": "横浜駅",
        "coordinates": { "lat": 35.4629, "lng": 139.6207 },
        "status": "open",
        "distance": 3,
        "features": ["テラス席", "開放的", "見つけやすい"],
        "menu": [
            { "name": "カフェラテ", "price": 520, "emoji": "🥛☕", "description": "まろやかなコク", "category": "Coffee" },
            { "name": "ベリーマフィン", "price": 330, "emoji": "🫐", "description": "甘酸っぱくて人気", "category": "Sweets" },
            { "name": "ベジサンドセット", "price": 680, "emoji": "🥗", "description": "ヘルシー軽食", "category": "Set" }
        ],
        "coupons": [
            { "name": "ラテ30円オフ", "discount": 30 },
            { "name": "マフィン20円オフ", "discount": 20 }
        ]
    },
    {
        "id": 144,
        "name": "Kawasaki Station City Spot",
        "image": "🏙️",
        "atmosphere": "川崎駅前で最も入りやすい気軽なミートアップカフェ",
        "station": "川崎駅",
        "coordinates": { "lat": 35.5310, "lng": 139.6975 },
        "status": "open",
        "distance": 1,
        "features": ["駅前", "待ち合わせ向き", "明るい"],
        "menu": [
            { "name": "モカブレンド", "price": 450, "emoji": "☕", "description": "コク深い味わい", "category": "Coffee" },
            { "name": "カスタードプリン", "price": 310, "emoji": "🍮", "description": "なめらか食感", "category": "Sweets" },
            { "name": "ミニサンド（ハム）", "price": 560, "emoji": "🥪", "description": "定番の味", "category": "Food" }
        ],
        "coupons": [{ "name": "モカ40円オフ", "discount": 40 }]
    },
    {
        "id": 145,
        "name": "Kawasaki East River Cafe",
        "image": "🌉",
        "atmosphere": "川沿いの静かなカフェで落ち着いた待ち合わせに最適",
        "station": "川崎駅",
        "coordinates": { "lat": 35.5301, "lng": 139.7001 },
        "status": "open",
        "distance": 4,
        "features": ["川沿い", "静か", "ゆったり"],
        "menu": [
            { "name": "アールグレイティー", "price": 430, "emoji": "🫖", "description": "上品な香り", "category": "Tea" },
            { "name": "オレンジスコーン", "price": 300, "emoji": "🍊", "description": "軽い柑橘系の甘さ", "category": "Sweets" },
            { "name": "トマトスープセット", "price": 700, "emoji": "🍅", "description": "あったか軽食", "category": "Set" }
        ]
    },
    {
        "id": 146,
        "name": "Kawasaki Center Street Stand",
        "image": "🛣️",
        "atmosphere": "中央通り沿いで見つけやすいカジュアルカフェ",
        "station": "川崎駅",
        "coordinates": { "lat": 35.5318, "lng": 139.6984 },
        "status": "open",
        "distance": 2,
        "features": ["通り沿い", "活気あり", "迷わない"],
        "menu": [
            { "name": "ライトブレンド", "price": 410, "emoji": "☕", "description": "軽い苦味", "category": "Coffee" },
            { "name": "キャラメルケーキ", "price": 320, "emoji": "🍰", "description": "甘くてしっとり", "category": "Sweets" },
            { "name": "ミニホットドッグ", "price": 530, "emoji": "🌭", "description": "軽食に最適", "category": "Food" }
        ],
        "coupons": [{ "name": "ケーキ20円オフ", "discount": 20 }]
    },
    {
        "id": 147,
        "name": "Kawasaki Parkside Lounge",
        "image": "🌳",
        "atmosphere": "公園横の静かな広めカフェ。集合しやすい",
        "station": "川崎駅",
        "coordinates": { "lat": 35.5329, "lng": 139.6961 },
        "status": "open",
        "distance": 3,
        "features": ["公園横", "静かめ", "会話に良い"],
        "menu": [
            { "name": "カモミールティー", "price": 450, "emoji": "🌼", "description": "リラックスできる香り", "category": "Tea" },
            { "name": "ショートケーキ", "price": 330, "emoji": "🍰", "description": "甘さ控えめ", "category": "Sweets" },
            { "name": "チーズトーストセット", "price": 650, "emoji": "🧀", "description": "さっと食べられる", "category": "Set" }
        ]
    },
    {
        "id": 148,
        "name": "Fujisawa Station North Terrace",
        "image": "🌞",
        "atmosphere": "藤沢駅北口の明るいテラスカフェ",
        "station": "藤沢駅",
        "coordinates": { "lat": 35.3389, "lng": 139.4871 },
        "status": "open",
        "distance": 2,
        "features": ["明るい", "駅近", "開放感"],
        "menu": [
            { "name": "エスプレッソ", "price": 410, "emoji": "☕", "description": "濃いめ", "category": "Coffee" },
            { "name": "チョコマフィン", "price": 320, "emoji": "🍫", "description": "濃厚甘め", "category": "Sweets" },
            { "name": "ミニトーストセット", "price": 580, "emoji": "🍞", "description": "軽食向け", "category": "Food" }
        ],
        "coupons": [{ "name": "マフィン15円オフ", "discount": 15 }]
    },
    {
        "id": 149,
        "name": "Fujisawa South Gate Light Cafe",
        "image": "🌺",
        "atmosphere": "南口の落ち着いた合流向けカフェ",
        "station": "藤沢駅",
        "coordinates": { "lat": 35.3380, "lng": 139.4868 },
        "status": "open",
        "distance": 1,
        "features": ["南口近い", "落ち着く", "入りやすい"],
        "menu": [
            { "name": "カフェミスト", "price": 480, "emoji": "🥛☕", "description": "まろやか", "category": "Coffee" },
            { "name": "レモンタルト", "price": 350, "emoji": "🍋", "description": "爽やかな甘酸っぱさ", "category": "Sweets" },
            { "name": "ライトベーグル", "price": 600, "emoji": "🥯", "description": "軽いモチモチ感", "category": "Food" }
        ],
        "coupons": [{ "name": "タルト40円オフ", "discount": 40 }]
    },
    {
        "id": 150,
        "name": "Fujisawa Coastline Lounge",
        "image": "🌅",
        "atmosphere": "海へ向かう途中にある静かなラウンジ系カフェ",
        "station": "藤沢駅",
        "coordinates": { "lat": 35.3368, "lng": 139.4890 },
        "status": "open",
        "distance": 4,
        "features": ["海方面", "静か", "開放的"],
        "menu": [
            { "name": "ハーブティー", "price": 440, "emoji": "🍃", "description": "香り優しい", "category": "Tea" },
            { "name": "抹茶ケーキ", "price": 330, "emoji": "🍵", "description": "和の甘さ", "category": "Sweets" },
            { "name": "サラダプレート", "price": 720, "emoji": "🥗", "description": "ヘルシー系", "category": "Food" }
        ]
    },
    {
        "id": 151,
        "name": "Fujisawa Riverside Cafe",
        "image": "🌊",
        "atmosphere": "川沿いの解放感あるカフェで集合向き",
        "station": "藤沢駅",
        "coordinates": { "lat": 35.3401, "lng": 139.4882 },
        "status": "open",
        "distance": 3,
        "features": ["川沿い", "静かめ", "開放感"],
        "menu": [
            { "name": "アイスティー", "price": 380, "emoji": "🧊🫖", "description": "すっきり味", "category": "Tea" },
            { "name": "スノークッキー", "price": 250, "emoji": "❄️🍪", "description": "優しい甘さ", "category": "Sweets" },
            { "name": "ミニプレートセット", "price": 640, "emoji": "🍽️", "description": "軽いセット", "category": "Food" }
        ]
    },
    {
        "id": 152,
        "name": "Sagamihara Station Front Meet Spot",
        "image": "🟦",
        "atmosphere": "駅前で人が見つけやすい集合向きカフェ",
        "station": "相模原駅",
        "coordinates": { "lat": 35.5764, "lng": 139.3710 },
        "status": "open",
        "distance": 1,
        "features": ["駅前", "明るい", "入りやすい"],
        "menu": [
            { "name": "ブレンドコーヒー", "price": 420, "emoji": "☕", "description": "標準的な香り", "category": "Coffee" },
            { "name": "プレーンクッキー", "price": 200, "emoji": "🍪", "description": "軽い甘さ", "category": "Sweets" },
            { "name": "ミニベジサンド", "price": 530, "emoji": "🥗🥪", "description": "ヘルシー軽食", "category": "Food" }
        ],
        "coupons": [{ "name": "ブレンド20円オフ", "discount": 20 }]
    },
    {
        "id": 153,
        "name": "Sagamihara Green Park Lounge",
        "image": "🌲",
        "atmosphere": "公園横で落ち着く自然系カフェ",
        "station": "相模原駅",
        "coordinates": { "lat": 35.5772, "lng": 139.3715 },
        "status": "open",
        "distance": 3,
        "features": ["自然豊か", "静かめ", "リラックス"],
        "menu": [
            { "name": "カフェオレ", "price": 450, "emoji": "🥛☕", "description": "やさしい甘さ", "category": "Coffee" },
            { "name": "ミルクプリン", "price": 310, "emoji": "🍮", "description": "とろり食感", "category": "Sweets" },
            { "name": "ベジタブルスープセット", "price": 690, "emoji": "🥕🍲", "description": "温まる", "category": "Set" }
        ]
    },
    {
        "id": 154,
        "name": "Sagamihara East Side Stand",
        "image": "🏠",
        "atmosphere": "駅東側の小道にある静かなスタンドカフェ",
        "station": "相模原駅",
        "coordinates": { "lat": 35.5758, "lng": 139.3720 },
        "status": "open",
        "distance": 2,
        "features": ["隠れ家", "静か", "人混み少ない"],
        "menu": [
            { "name": "アッサムティー", "price": 430, "emoji": "🫖", "description": "香りしっかり", "category": "Tea" },
            { "name": "抹茶スコーン", "price": 310, "emoji": "🍵", "description": "控えめな甘さ", "category": "Sweets" },
            { "name": "ミニハムサンド", "price": 540, "emoji": "🥪", "description": "軽め食事", "category": "Food" }
        ],
        "coupons": [{ "name": "ティー25円オフ", "discount": 25 }]
    },
    {
        "id": 155,
        "name": "Sagamihara South Calm Cafe",
        "image": "🌙",
        "atmosphere": "南側の落ち着いたエリアにある静かなカフェ",
        "station": "相模原駅",
        "coordinates": { "lat": 35.5750, "lng": 139.3711 },
        "status": "open",
        "distance": 3,
        "features": ["静か", "ゆったり", "待ち合わせ向け"],
        "menu": [
            { "name": "ロイヤルミルクティー", "price": 470, "emoji": "🫖🥛", "description": "濃厚でまろやか", "category": "Tea" },
            { "name": "フルーツケーキ", "price": 350, "emoji": "🍒🍰", "description": "甘酸っぱいフルーツ入り", "category": "Sweets" },
            { "name": "スープ＆トーストセット", "price": 720, "emoji": "🍞🍲", "description": "バランス良い軽食", "category": "Food" }
        ]
    },
    {
        "id": 156,
        "name": "Sagamihara Hillside Meet Point",
        "image": "⛰️",
        "atmosphere": "坂の上にある穴場のミーティング向けカフェ",
        "station": "相模原駅",
        "coordinates": { "lat": 35.5779, "lng": 139.3703 },
        "status": "open",
        "distance": 4,
        "features": ["静か", "見晴らし良い", "話しやすい"],
        "menu": [
            { "name": "ダークロースト", "price": 450, "emoji": "☕", "description": "しっかり苦味系", "category": "Coffee" },
            { "name": "ベリータルト", "price": 330, "emoji": "🫐", "description": "甘酸っぱくて香り豊か", "category": "Sweets" },
            { "name": "ミニクロワッサンセット", "price": 630, "emoji": "🥐", "description": "軽く食べられる", "category": "Food" }
        ],
        "coupons": [{ "name": "タルト20円オフ", "discount": 20 }]
    },
    {
        "id": 157,
        "name": "Shonan Ocean Breeze Cafe",
        "image": "🌊",
        "atmosphere": "湘南海沿いの風が気持ち良い軽めのミートアップスポット",
        "station": "湘南台駅",
        "coordinates": { "lat": 35.3945, "lng": 139.4678 },
        "status": "open",
        "distance": 3,
        "features": ["海風", "解放感", "散歩ついで"],
        "menu": [
            { "name": "オーシャンブレンド", "price": 450, "emoji": "☕", "description": "さっぱり系", "category": "Coffee" },
            { "name": "ブルーマフィン", "price": 320, "emoji": "🫐", "description": "甘さ控えめ", "category": "Sweets" },
            { "name": "サーモンミニサンド", "price": 620, "emoji": "🐟🥪", "description": "軽い塩気", "category": "Food" }
        ],
        "coupons": [{ "name": "ミニサンド50円オフ", "discount": 50 }]
    },
    {
        "id": 158,
        "name": "Shonan Terrace Chill Spot",
        "image": "🏖️",
        "atmosphere": "テラス席が広くゆっくり座れる湘南らしいカフェ",
        "station": "湘南台駅",
        "coordinates": { "lat": 35.3932, "lng": 139.4681 },
        "status": "open",
        "distance": 2,
        "features": ["テラス席", "静か", "広め"],
        "menu": [
            { "name": "アイスアールグレイ", "price": 390, "emoji": "🧊🫖", "description": "爽やか", "category": "Tea" },
            { "name": "キャロットケーキ", "price": 340, "emoji": "🥕🍰", "description": "スパイス香る", "category": "Sweets" },
            { "name": "ベジサラダボウル", "price": 700, "emoji": "🥗", "description": "軽いランチにも", "category": "Food" }
        ]
    },
    {
        "id": 159,
        "name": "Shonan Green Path Stand",
        "image": "🌿",
        "atmosphere": "緑道沿いの落ち着く、小さめの集合向けカフェ",
        "station": "湘南台駅",
        "coordinates": { "lat": 35.3929, "lng": 139.4667 },
        "status": "open",
        "distance": 4,
        "features": ["緑道沿い", "静かめ", "隠れ家"],
        "menu": [
            { "name": "焙じ茶ラテ", "price": 480, "emoji": "🍵🥛", "description": "香ばしい香り", "category": "Tea" },
            { "name": "きなこクッキー", "price": 250, "emoji": "🍪", "description": "和風の甘さ", "category": "Sweets" },
            { "name": "ほうれん草キッシュ", "price": 660, "emoji": "🥧", "description": "軽い食事に", "category": "Food" }
        ],
        "coupons": [{ "name": "キッシュ30円オフ", "discount": 30 }]
    },
    {
        "id": 160,
        "name": "Ofuna Station Parkside Cafe",
        "image": "🌳",
        "atmosphere": "大船駅前の公園隣で静かに話せるカフェ",
        "station": "大船駅",
        "coordinates": { "lat": 35.3538, "lng": 139.5313 },
        "status": "open",
        "distance": 2,
        "features": ["公園横", "落ち着く", "ベンチ風席あり"],
        "menu": [
            { "name": "大船ブレンド", "price": 430, "emoji": "☕", "description": "やわらかい苦味", "category": "Coffee" },
            { "name": "紅茶シフォン", "price": 330, "emoji": "🍰", "description": "ふわふわ", "category": "Sweets" },
            { "name": "ミニチーズサンド", "price": 580, "emoji": "🧀🥪", "description": "軽めのコク", "category": "Food" }
        ]
    },
    {
        "id": 161,
        "name": "Ofuna Terrace Railview Cafe",
        "image": "🚉",
        "atmosphere": "線路ビューで開放的、大船名物の景色が楽しめる",
        "station": "大船駅",
        "coordinates": { "lat": 35.3525, "lng": 139.5304 },
        "status": "open",
        "distance": 3,
        "features": ["線路ビュー", "開放感", "雰囲気いい"],
        "menu": [
            { "name": "フラットホワイト", "price": 490, "emoji": "🥛☕", "description": "ミルキー", "category": "Coffee" },
            { "name": "シナモンロール", "price": 360, "emoji": "🌀", "description": "しっとり甘め", "category": "Sweets" },
            { "name": "温野菜プレート", "price": 740, "emoji": "🥦🥕", "description": "ヘルシーランチ", "category": "Food" }
        ],
        "coupons": [{ "name": "シナモンロール40円オフ", "discount": 40 }]
    },
    {
        "id": 162,
        "name": "Ofuna East Small Stand",
        "image": "🍃",
        "atmosphere": "小さなスタンドタイプで気軽に使えるカフェ",
        "station": "大船駅",
        "coordinates": { "lat": 35.3542, "lng": 139.5295 },
        "status": "open",
        "distance": 1,
        "features": ["スタンド式", "サッと使える", "短時間向け"],
        "menu": [
            { "name": "アイスミルクティー", "price": 430, "emoji": "🧊🫖", "description": "すっきり味", "category": "Tea" },
            { "name": "抹茶プリン", "price": 300, "emoji": "🍮🍵", "description": "なめらか", "category": "Sweets" },
            { "name": "ツナミニサンド", "price": 560, "emoji": "🐟🥪", "description": "軽食に最適", "category": "Food" }
        ]
    },
    {
        "id": 163,
        "name": "Shinyurigaoka Forest Lounge",
        "image": "🌲",
        "atmosphere": "新百合ヶ丘の緑に囲まれた落ち着くラウンジ系カフェ",
        "station": "新百合ヶ丘駅",
        "coordinates": { "lat": 35.6033, "lng": 139.5079 },
        "status": "open",
        "distance": 3,
        "features": ["緑が多い", "静か", "ゆったり"],
        "menu": [
            { "name": "新百合ブレンド", "price": 450, "emoji": "☕", "description": "深みのある香り", "category": "Coffee" },
            { "name": "カフェショコラ", "price": 350, "emoji": "🍫", "description": "濃厚甘さ", "category": "Sweets" },
            { "name": "スープボウルセット", "price": 720, "emoji": "🍲", "description": "温かい軽食", "category": "Food" }
        ],
        "coupons": [{ "name": "スープ50円オフ", "discount": 50 }]
    },
    {
        "id": 164,
        "name": "Shinyurigaoka South Terrace Spot",
        "image": "🌼",
        "atmosphere": "南側テラスで待ち合わせに便利な明るいカフェ",
        "station": "新百合ヶ丘駅",
        "coordinates": { "lat": 35.6025, "lng": 139.5070 },
        "status": "open",
        "distance": 2,
        "features": ["テラス席", "明るい", "駅近"],
        "menu": [
            { "name": "ハニーミルクティー", "price": 460, "emoji": "🍯🫖", "description": "優しい甘さ", "category": "Tea" },
            { "name": "ストロベリーケーキ", "price": 360, "emoji": "🍰🍓", "description": "甘酸っぱく人気", "category": "Sweets" },
            { "name": "サンドイッチプレート", "price": 760, "emoji": "🥪", "description": "軽食でも十分", "category": "Food" }
        ]
    },
    {
        "id": 165,
        "name": "Shinyurigaoka West Light Stand",
        "image": "🌙",
        "atmosphere": "西口の落ち着いたエリアにある静かなスタンド",
        "station": "新百合ヶ丘駅",
        "coordinates": { "lat": 35.6030, "lng": 139.5062 },
        "status": "open",
        "distance": 1,
        "features": ["静か", "短時間向け", "落ち着く"],
        "menu": [
            { "name": "アメリカンライト", "price": 410, "emoji": "☕", "description": "軽い味わい", "category": "Coffee" },
            { "name": "ラスク", "price": 240, "emoji": "🍞", "description": "サクサク", "category": "Sweets" },
            { "name": "ミニハムトースト", "price": 560, "emoji": "🥪", "description": "さっと食べられる", "category": "Food" }
        ],
        "coupons": [{ "name": "ラスク15円オフ", "discount": 15 }]
    },
    {
        "id": 166,
        "name": "Yokosuka Portside Cafe",
        "image": "⚓",
        "atmosphere": "港近くの横須賀らしい海風カフェ",
        "station": "横須賀中央駅",
        "coordinates": { "lat": 35.2810, "lng": 139.6720 },
        "status": "open",
        "distance": 3,
        "features": ["海近い", "開放感", "静か"],
        "menu": [
            { "name": "シーサイドブレンド", "price": 440, "emoji": "☕", "description": "軽めのコク", "category": "Coffee" },
            { "name": "ヨーグルトケーキ", "price": 320, "emoji": "🍰", "description": "爽やかな甘さ", "category": "Sweets" },
            { "name": "シーフードサンド", "price": 680, "emoji": "🦐🥪", "description": "海の香り", "category": "Food" }
        ]
    },
    {
        "id": 167,
        "name": "Yokosuka Blue Coast Lounge",
        "image": "🌊",
        "atmosphere": "青をテーマにした爽やかな海沿いラウンジ",
        "station": "横須賀中央駅",
        "coordinates": { "lat": 35.2801, "lng": 139.6731 },
        "status": "open",
        "distance": 4,
        "features": ["海沿い", "静か", "広め"],
        "menu": [
            { "name": "ミルクブレンド", "price": 480, "emoji": "🥛☕", "description": "まろやか", "category": "Coffee" },
            { "name": "ソルティクッキー", "price": 260, "emoji": "🧂🍪", "description": "ほんのり塩味", "category": "Sweets" },
            { "name": "ベジミニセット", "price": 610, "emoji": "🥗", "description": "軽食にも◎", "category": "Food" }
        ],
        "coupons": [{ "name": "クッキー25円オフ", "discount": 25 }]
    },
    {
        "id": 168,
        "name": "Hon-Atsugi Central Cafe",
        "image": "🏞️",
        "atmosphere": "本厚木の中心にあり入店しやすい明るいカフェ",
        "station": "本厚木駅",
        "coordinates": { "lat": 35.4439, "lng": 139.3623 },
        "status": "open",
        "distance": 1,
        "features": ["駅前", "明るい", "入りやすい"],
        "menu": [
            { "name": "本厚木ブレンド", "price": 430, "emoji": "☕", "description": "飲みやすいバランス", "category": "Coffee" },
            { "name": "アップルマフィン", "price": 320, "emoji": "🍎🧁", "description": "優しい甘さ", "category": "Sweets" },
            { "name": "クリームチーズサンド", "price": 590, "emoji": "🧀🥪", "description": "軽い塩気", "category": "Food" }
        ]
    },
    {
        "id": 169,
        "name": "Hon-Atsugi Riverside Lounge",
        "image": "🌉",
        "atmosphere": "川沿いで静かに過ごせる落ち着いたラウンジ",
        "station": "本厚木駅",
        "coordinates": { "lat": 35.4448, "lng": 139.3610 },
        "status": "open",
        "distance": 3,
        "features": ["川沿い", "静か", "落ち着く"],
        "menu": [
            { "name": "ロイヤルミルクコーヒー", "price": 480, "emoji": "🥛☕", "description": "リッチな甘さ", "category": "Coffee" },
            { "name": "チョコブラウニー", "price": 340, "emoji": "🍫", "description": "濃厚", "category": "Sweets" },
            { "name": "グリーンサラダセット", "price": 720, "emoji": "🥗", "description": "軽めランチ", "category": "Food" }
        ],
        "coupons": [{ "name": "ブラウニー40円オフ", "discount": 40 }]
    },
    {
        "id": 170,
        "name": "Hon-Atsugi Small Meeting Stand",
        "image": "☕",
        "atmosphere": "ちょっとした集合に最適な小さめのカフェ",
        "station": "本厚木駅",
        "coordinates": { "lat": 35.4434, "lng": 139.3630 },
        "status": "open",
        "distance": 2,
        "features": ["小さめ", "短時間向け", "わかりやすい"],
        "menu": [
            { "name": "厚木ライトブレンド", "price": 420, "emoji": "☕", "description": "軽い口当たり", "category": "Coffee" },
            { "name": "ミニカスタードパイ", "price": 260, "emoji": "🥧", "description": "やさしい甘さ", "category": "Sweets" },
            { "name": "チキンミニセット", "price": 630, "emoji": "🍗🥪", "description": "軽い食事", "category": "Food" }
        ]
    }
];
