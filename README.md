# Kana to Romaji Converter
A (naive) JavaScript Class for converting texts written in just Hiragana and Katakana into Latin script (Romaji).

## Demo
You can find a demo page [here](https://rappelmann.github.io/KanaToRomajiConverter/KanaToRomajiConverterDemo.html)

## How does it work?
The script adds Kana combinations form four- to three- to two- to one-character combinations to an array and then replaces the Kana in the string given to the kanaToRomaji function in that order.
Long vowels are also handled this way, instead of going through the resulting Romaji again and replacing double vowels/ou because in my original use case, there were some Romaji mixed in the Katakana I had to convert.

## Settings
There are three Booleans to pass to the constructor:<br>
- separateAmbiguousNWithApostrophe: This makes the converter add an apostrophe after n (ん・ン), if it's followed by a y (や・ヤ、ゆ・ユ、よ・ヨ) to distinguish from small y (にゃ・にゃ、にゅ・ニュ、にょ・ニョ). 
- useDiacriticsForLongVowels: This adds a macron to u and o, if a Kana with the vowels u or o is followed by a u and adds a macron to vowels followed by the chōon-character (ー). This means double Hiragana a, e and i are retained as "aa", "ei" and "ii" and long o written with お (like 通る　とおる) are retained as "oo".
- replaceNWithMIfAppropriate: This uses m instead of n (ん・ン) if the next consonant is bilabial. This results in Tempura, Sempai and Shimbashi, instead of Tenpura, Senpai and Shinbashi.

<br><br>I made this for converting a list of names in Google Sheets and for this use case, it works really nice. If you have further suggestions, let me know.
