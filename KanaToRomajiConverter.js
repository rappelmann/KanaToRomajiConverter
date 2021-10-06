class KanaToRomajiConverter{
    kanaArray = [] //array to fill with the Kana, depending on setting
    useDiacriticsForLongVowels = false
    singleKana = [['あ','a'],['ア','a'],['い','i'],['イ','i'],['う','u'],['ウ','u'],['え','e'],['エ','e'],['お','o'],['オ','o'],
    ['か','ka'],['カ','ka'],['き','ki'],['キ','ki'],['く','ku'],['ク','ku'],['け','ke'],['ケ','ke'],['こ','ko'],['コ','ko'],
    ['さ','sa'],['サ','sa'],['し','shi'],['シ','shi'],['す','su'],['ス','su'],['せ','se'],['セ','se'],['そ','so'],['ソ','so'],
    ['た','ta'],['タ','ta'],['ち','chi'],['チ','chi'],['つ','tsu'],['ツ','tsu'],['て','te'],['テ','te'],['と','to'],['ト','to'],
    ['な','na'],['ナ','na'],['に','ni'],['ニ','ni'],['ぬ','nu'],['ヌ','nu'],['ね','ne'],['ネ','ne'],['の','no'],['ノ','no'],
    ['は','ha'],['ハ','ha'],['ひ','hi'],['ヒ','hi'],['ふ','fu'],['フ','fu'],['へ','he'],['ヘ','he'],['ほ','ho'],['ホ','ho'],
    ['ま','ma'],['マ','ma'],['み','mi'],['ミ','mi'],['む','mu'],['ム','mu'],['め','me'],['メ','me'],['も','mo'],['モ','mo'],
    ['や','ya'],['ヤ','ya'],['ゆ','yu'],['ユ','yu'],['よ','yo'],['ヨ','yo'],
    ['ら','ra'],['ラ','ra'],['り','ri'],['リ','ri'],['る','ru'],['ル','ru'],['れ','re'],['レ','re'],['ろ','ro'],['ロ','ro'],
    ['わ','wa'],['ワ','wa'],['ゐ','i'],['ヰ','i'],['ゑ','e'],['ヱ','e'],['を','o'],['ヲ','o'],['ん','n'],['ン','n'],
    ['が','ga'],['ガ','ga'],['ぎ','gi'],['ギ','gi'],['ぐ','gu'],['グ','gu'],['げ','ge'],['ゲ','ge'],['ご','go'],['ゴ','go'],
    ['ざ','za'],['ザ','za'],['じ','ji'],['ジ','ji'],['ず','zu'],['ズ','zu'],['ぜ','ze'],['ゼ','ze'],['ぞ','zo'],['ゾ','zo'],
    ['だ','da'],['ダ','da'],['ぢ','ji'],['ヂ','ji'],['づ','zu'],['ヅ','zu'],['で','de'],['デ','de'],['ど','do'],['ド','do'],
    ['ば','ba'],['バ','ba'],['び','bi'],['ビ','bi'],['ぶ','bu'],['ブ','bu'],['べ','be'],['ベ','be'],['ぼ','bo'],['ボ','bo'],
    ['ぱ','pa'],['パ','pa'],['ぴ','pi'],['ピ','pi'],['ぷ','pu'],['プ','pu'],['ぺ','pe'],['ペ','pe'],['ぽ','po'],['ポ','po'],
    ['ヷ','va'],['ヸ','vi'],['ヴ','vu'],['ゔ','vu'],['ヹ','ve'],['ヺ','vo']]
    doubleKana = [['きゃ','kya'],['キャ','kya'],['きゅ','kyu'],['キュ','kyu'],['きょ','kyo'],['キョ','kyo'],
    ['しゃ','sha'],['シャ','sha'],['しゅ','shu'],['シュ','shu'],['しょ','sho'],['ショ','sho'],
    ['ちゃ','cha'],['チャ','cha'],['ちゅ','chu'],['チュ','chu'],['ちょ','cho'],['チョ','cho'],
    ['にゃ','nya'],['ニャ','nya'],['にゅ','nyu'],['ニュ','nyu'],['にょ','nyo'],['ニョ','nyo'],
    ['ひゃ','hya'],['ヒャ','hya'],['ひゅ','hyu'],['ヒュ','hyu'],['ひょ','hyo'],['ヒョ','hyo'],
    ['みゃ','mya'],['ミャ','mya'],['みゅ','myu'],['ミュ','myu'],['みょ','myo'],['ミョ','myo'],
    ['りゃ','rya'],['リャ','rya'],['りゅ','ryu'],['リュ','ryu'],['りょ','ryo'],['リョ','ryo'],
    ['ぎゃ','gya'],['ギャ','gya'],['ぎゅ','gyu'],['ギュ','gyu'],['ぎょ','gyo'],['ギョ','gyo'],
    ['じゃ','ja'],['ジャ','ja'],['じゅ','ju'],['ジュ','ju'],['じょ','jo'],['ジョ','jo'],
    ['ぢゃ','ja'],['ヂャ','ja'],['ぢゅ','ju'],['ヂュ','ju'],['ぢょ','jo'],['ヂョ','jo'],
    ['びゃ','bya'],['ビャ','bya'],['びゅ','byu'],['ビュ','byu'],['びょ','byo'],['ビョ','byo'],
    ['ぴゃ','pya'],['ピャ','pya'],['ぴゅ','pyu'],['ピュ','pyu'],['ぴょ','pyo'],['ピョ','pyo'],
    ['イィ','yi'],['イェ','ye'],['ウァ','wa'],['ウィ','wi'],['ウゥ','wu'],['ウェ','we'],['ウォ','wo'],
    ['ウュ','wyu'],
    ['ヴァ','va'],['ヴィ','vi'],['ヴ','vu'],['ヴェ','ve'],['ヴォ','vo'],
    ['ヴャ','vya'],['ヴュ','vyu'],['ヴョ','vyo'],
    ['キェ','kye'],['ギェ','gye'],
    ['クァ','kwa'],['クィ','kwi'],['クェ','kwe'],['クォ','kwo'],
    ['クヮ','kwa'],['グァ','gwa'],['グヮ','gwa'],['グィ','gwi'],['グェ','gwe'],['グォ','gwo'],
    ['シェ','she'],['ジェ','je'],
    ['スィ','si'],['ズィ','zi'],
    ['チェ','che'],
    ['ツァ','tsa'],['ツィ','tsi'],['ツェ','tse'],['ツォ','tso'],['ツュ','tsyu'],
    ['ティ','ti'],['トゥ','tu'],['テュ','tyu'],['ディ','di'],['ドゥ','du'],['デュ','dyu'],
    ['ニェ','nye'],['ヒェ','hye'],['ビェ','bye'],['ピェ','pye'],
    ['ファ','fa'],['フィ','fi'],['フェ','fe'],['フォ','fo'],
    ['フャ','fya'],['フュ','fyu'],['フョ','fyo'],
    ['ホゥ','hu'],
    ['ミェ','mye'],
    ['リェ','rye'],
    ['ラ゜','la'],['リ゜','li'],['ル゜','lu'],['レ゜','le'],['ロ゜','lo']]
    tripleKana=[['リ゜ャ','lya'],['リ゜ュ','lyu'],['リ゜ェ','lye'],['リ゜ョ','lyo'],['リ゜ュウ','lyu'],['リ゜ョウ','lyo'],
    ['フィェ','fye']]

    //NMRule
    doubleKanaNMRule = [['んま','mma'],['ンマ','mma'],['んみ','mmi'],['ンミ','mmi'],['んむ','mmu'],['ンム','mmu'],['んめ','mme'],['ンメ','mme'],['んも','mmo'],['ンモ','mmo'],
    ['んば','mba'],['ンバ','mba'],['んび','mbi'],['ンビ','mbi'],['んぶ','mbu'],['ンブ','mbu'],['んべ','mbe'],['ンベ','mbe'],['んぼ','mbo'],['ンボ','mbo'],
    ['んぱ','mpa'],['ンパ','mpa'],['んぴ','mpi'],['ンピ','mpi'],['んぷ','mpu'],['ンプ','mpu'],['んぺ','mpe'],['ンペ','mpe'],['んぽ','mpo'],['ンポ','mpo']]
    tripleKanaNMRule = [['んみゃ','mmya'],['ンミャ','mmya'],['んみゅ','mmyu'],['ンミュ','mmyu'],['んみょ','mmyo'],['ンミョ','mmyo'],
    ['んびゃ','mbya'],['ンビャ','mbya'],['んびゅ','mbyu'],['ンビュ','mbyu'],['んびょ','mbyo'],['ンビョ','mbyo'],
    ['んぴゃ','mpya'],['ンピャ','mpya'],['んぴゅ','mpyu'],['ンピュ','mpyu'],['んぴょ','mpyo'],['ンピョ','mpyo'],
    ['ンビェ','mbye'],['ンピェ','mpye'],
    ['ンミェ','mmye']]

    //long U and O without diacritics
    trpileKanaLongUONMRule = [['んむう','mmu'],['ンムウ','mmu'],['んもう','mmo'],['ンモウ','mmo'],
    ['んぶう','mbu'],['ンブウ','mbu'],['んぼう','mbo'],['ンボウ','mbo'],
    ['んぷう','mpu'],['ンプウ','mpu'],['んぽう','mpo'],['ンポウ','mpo']]
    quadrupleKanaLongUONMRule = [['んみゅう','mmyu'],['ンミュウ','mmyu'],['んみょう','mmyo'],['ンミョウ','mmyo'],
    ['んびゅう','mbyu'],['ンビュウ','mbyu'],['んびょう','mbyo'],['ンビョウ','mbyo'],
    ['んぴゅう','mpyu'],['ンピュウ','mpyu'],['んぴょう','mpyo'],['ンピョウ','mpyo']]
    doubleKanaLongUO = [['うう','u'],['ウウ','u'],['おう','o'],['オウ','o'],
    ['くう','ku'],['クウ','ku'],['こう','ko'],['コウ','ko'],
    ['すう','su'],['スウ','su'],['そう','so'],['ソウ','so'],
    ['つう','tsu'],['ツウ','tsu'],['とう','to'],['トウ','to'],
    ['ぬう','nu'],['ヌウ','nu'],['のう','no'],['ノウ','no'],
    ['ふう','fu'],['フウ','fu'],['ほう','ho'],['ホウ','ho'],
    ['むう','mu'],['ムウ','mu'],['もう','mo'],['モウ','mo'],
    ['ゆう','yu'],['ユウ','yu'],['よう','yo'],['ヨウ','yo'],
    ['るう','ru'],['ルウ','ru'],['ろう','ro'],['ロウ','ro'],
    ['ぐう','gu'],['グウ','gu'],['ごう','go'],['ゴウ','go'],
    ['ずう','zu'],['ズウ','zu'],['ぞう','zo'],['ゾウ','zo'],
    ['づう','zu'],['ヅウ','zu'],['どう','do'],['ドウ','do'],
    ['ぶう','bu'],['ブウ','bu'],['ぼう','bo'],['ボウ','bo'],
    ['ぷう','pu'],['プウ','pu'],['ぽう','po'],['ポウ','po'],
    ['ヴウ','vu'],['ヺウ','vo']]
    tripleKanaLongUO = [['きゅう','kyu'],['キュウ','kyu'],['きょう','kyo'],['キョウ','kyo'],
    ['しゅう','shu'],['シュウ','shu'],['しょう','sho'],['ショウ','sho'],
    ['ちゅう','chu'],['チュウ','chu'],['ちょう','cho'],['チョウ','cho'],
    ['にゅう','nyu'],['ニュウ','nyu'],['にょう','nyo'],['ニョウ','nyo'],
    ['ひゅう','hyu'],['ヒュウ','hyu'],['ひょう','hyo'],['ヒョウ','hyo'],
    ['みゅう','myu'],['ミュウ','myu'],['みょう','myo'],['ミョウ','myo'],
    ['りゅう','ryu'],['リュウ','ryu'],['りょう','ryo'],['リョウ','ryo'],
    ['ぎゅう','gyu'],['ギュウ','gyu'],['ぎょう','gyo'],['ギョウ','gyo'],
    ['じゅう','ju'],['ジュウ','ju'],['じょう','jo'],['ジョウ','jo'],
    ['ぢゅう','ju'],['ヂュウ','ju'],['ぢょう','jo'],['ヂョウ','jo'],
    ['びゅう','byu'],['ビュウ','byu'],['びょう','byo'],['ビョウ','byo'],
    ['ぴゅう','pyu'],['ピュウ','pyu'],['ぴょう','pyo'],['ピョウ','pyo'],
    ['ウゥウ','wu'],['ウォウ','wo'],
    ['ウュウ','wyu'],['ヴォウ','vo'],
    ['ヴュウ','vyu'],['ヴョウ','vyo'],['ヴィェ','vye'],
    ['クォウ','kwo'],['グォウ','gwo'],
    ['ツォウ','tso'],['ツュウ','tsyu'],
    ['トゥウ','tu'],['テュウ','tyu'],
    ['ドゥウ','du'],['デュウ','dyu'],
    ['フォウ','fo'],['フュウ','fyu'],['フョウ','fyo'],['ホゥウ','hu'],
    ['ル゜ウ','lu'],['ロ゜ウ','lo']]

    //long U and O with Diacritics
    trpileKanaLongUONMRuleDiacritics = [['んむう','mmū'],['ンムウ','mmū'],['んもう','mmō'],['ンモウ','mmō'],
    ['んぶう','mbū'],['ンブウ','mbū'],['んぼう','mbō'],['ンボウ','mbō'],
    ['んぷう','mpū'],['ンプウ','mpū'],['んぽう','mpō'],['ンポウ','mpō']]
    quadrupleKanaLongUONMRuleDiacritics = [['んみゅう','mmyū'],['ンミュウ','mmyū'],['んみょう','mmyō'],['ンミョウ','mmyō'],
    ['んびゅう','mbyū'],['ンビュウ','mbyū'],['んびょう','mbyō'],['ンビョウ','mbyō'],
    ['んぴゅう','mpyū'],['ンピュウ','mpyū'],['んぴょう','mpyō'],['ンピョウ','mpyō']]
    doubleKanaLongUODiacritics = [['うう','ū'],['ウウ','ū'],['おう','ō'],['オウ','ō'],
    ['くう','kū'],['クウ','kū'],['こう','kō'],['コウ','kō'],
    ['すう','sū'],['スウ','sū'],['そう','sō'],['ソウ','sō'],
    ['つう','tsū'],['ツウ','tsū'],['とう','tō'],['トウ','tō'],
    ['ぬう','nū'],['ヌウ','nū'],['のう','nō'],['ノウ','nō'],
    ['ふう','fū'],['フウ','fū'],['ほう','hō'],['ホウ','hō'],
    ['むう','mū'],['ムウ','mū'],['もう','mō'],['モウ','mō'],
    ['ゆう','yū'],['ユウ','yū'],['よう','yō'],['ヨウ','yō'],
    ['るう','rū'],['ルウ','rū'],['ろう','rō'],['ロウ','rō'],
    ['ぐう','gū'],['グウ','gū'],['ごう','gō'],['ゴウ','gō'],
    ['ずう','zū'],['ズウ','zū'],['ぞう','zō'],['ゾウ','zō'],
    ['づう','zū'],['ヅウ','zū'],['どう','dō'],['ドウ','dō'],
    ['ぶう','bū'],['ブウ','bū'],['ぼう','bō'],['ボウ','bō'],
    ['ぷう','pū'],['プウ','pū'],['ぽう','pō'],['ポウ','pō'],
    ['ヴウ','vū'],['ヺウ','vō']]
    tripleKanaLongUODiacritics = [['きゅう','kyū'],['キュウ','kyū'],['きょう','kyō'],['キョウ','kyō'],
    ['しゅう','shū'],['シュウ','shū'],['しょう','shō'],['ショウ','shō'],
    ['ちゅう','chū'],['チュウ','chū'],['ちょう','chō'],['チョウ','chō'],
    ['にゅう','nyū'],['ニュウ','nyū'],['にょう','nyō'],['ニョウ','nyō'],
    ['ひゅう','hyū'],['ヒュウ','hyū'],['ひょう','hyō'],['ヒョウ','hyō'],
    ['みゅう','myū'],['ミュウ','myū'],['みょう','myō'],['ミョウ','myō'],
    ['りゅう','ryū'],['リュウ','ryū'],['りょう','ryō'],['リョウ','ryō'],
    ['ぎゅう','gyū'],['ギュウ','gyū'],['ぎょう','gyō'],['ギョウ','gyō'],
    ['じゅう','jū'],['ジュウ','jū'],['じょう','jō'],['ジョウ','jō'],
    ['ぢゅう','jū'],['ヂュウ','jū'],['ぢょう','jō'],['ヂョウ','jō'],
    ['びゅう','byū'],['ビュウ','byū'],['びょう','byō'],['ビョウ','byō'],
    ['ぴゅう','pyū'],['ピュウ','pyū'],['ぴょう','pyō'],['ピョウ','pyō'],
    ['ウゥウ','wū'],['ウォウ','wō'],
    ['ウュウ','wyū'],['ヴォウ','vō'],
    ['ヴュウ','vyū'],['ヴョウ','vyō'],['ヴィェ','vye'],
    ['クォウ','kwō'],['グォウ','gwō'],
    ['ツォウ','tsō'],['ツュウ','tsyū'],
    ['トゥウ','tū'],['テュウ','tyū'],
    ['ドゥウ','dū'],['デュウ','dyū'],
    ['フォウ','fō'],['フュウ','fyū'],['フョウ','fyō'],['ホゥウ','hū'],
    ['ル゜ウ','lū'],['ロ゜ウ','lō']]

    //N with Apostrophe Rule
    nRuleWithApostrophe = [['んや',"n'ya"],['ンヤ',"n'ya"],['んゆ',"n'yu"],['ンユ',"n'yu"],['んよ　ンヨ',"n'yo"]]
    nRuleWithApostopheLongUO = [['んゆう',"n'yu"],['ンユウ',"n'yu"],['んよう',"n'yo"],['ンヨウ',"n'yo"]]
    nRuleWithApostopheLongUODiacritics = [['んゆう',"n'yū"],['ンユウ',"n'yū"],['んよう',"n'yō"],['ンヨウ',"n'yō"]]

    constructor(separateAmbiguousNWithApostrophe, useDiacriticsForLongVowels, replaceNWithMIfAppropriate){
        this.useDiacriticsForLongVowels = useDiacriticsForLongVowels
        if(useDiacriticsForLongVowels){
            if(replaceNWithMIfAppropriate){
                this.addToKanaArray(this.quadrupleKanaLongUONMRuleDiacritics)
                this.addToKanaArray(this.tripleKanaNMRule)
                this.addToKanaArray(this.trpileKanaLongUONMRuleDiacritics)
            }
            this.addToKanaArray(this.tripleKanaLongUODiacritics)
            this.addToKanaArray(this.tripleKana)
            if(separateAmbiguousNWithApostrophe){
                this.addToKanaArray(this.nRuleWithApostopheLongUODiacritics)
                this.addToKanaArray(this.nRuleWithApostrophe)
            }
            if(replaceNWithMIfAppropriate){
                this.addToKanaArray(this.doubleKanaNMRule)
            }
            this.addToKanaArray(this.doubleKanaLongUODiacritics)
        }
        else{
            if(replaceNWithMIfAppropriate){
                this.addToKanaArray(this.quadrupleKanaLongUONMRule)
                this.addToKanaArray(this.tripleKanaNMRule)
                this.addToKanaArray(this.trpileKanaLongUONMRule)
            }
            this.addToKanaArray(this.tripleKanaLongUO)
            this.addToKanaArray(this.tripleKana)
            if(separateAmbiguousNWithApostrophe){
                this.addToKanaArray(this.nRuleWithApostopheLongUO)
                this.addToKanaArray(this.nRuleWithApostrophe)
            }
            if(replaceNWithMIfAppropriate){
                this.addToKanaArray(this.doubleKanaNMRule)
            }
            this.addToKanaArray(this.doubleKanaLongUO)
        }
        this.addToKanaArray(this.doubleKana)
        this.addToKanaArray(this.singleKana)
    }

    //helper function to add the sub arrays to the replacement array
    addToKanaArray(array){
        let kanaArray = this.kanaArray
        array.forEach(element => kanaArray.push(element));
    }

    //function which converts kana to Romaji
    kanaToRomaji(string){
        let useDiacriticsForLongVowels = this.useDiacriticsForLongVowels
        //replace Kana each for each with Romaji. Starting with quadruple, triple, double then single as added in the constructor
        this.kanaArray.forEach( element => {
            string = string.replaceAll(element[0], element[1])
        })
        //after all Romaji are added, match little tsu and replace it with the following char
        //if there is no following char, the little tsu gets removed
        //mutiple consequtive little tsu will remain unchanged (except the last one)
        string = string.replace(/([っッ])(.)?/g, function(match, p1, p2){
            if(isNaN(p2)){return ""}
            return p2 + p2
        })
        //replace long vowel symbol with the previous char
        string = string.replace(/(.)?(ー)/g, function(match, p1, p2){
            if(p1==undefined){return ""}
            if(useDiacriticsForLongVowels){
                switch(p1){
                    case 'a': return 'ā'
                    case 'i': return 'ī'
                    case 'u': return 'ū'
                    case 'e': return 'ē'
                    case 'o': return 'ō'
                    default: return p1
                }
            }
            return p1
        })
        return string
    }
}