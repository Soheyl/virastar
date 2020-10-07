# Virastar (ویراستار)
Virastar is a Persian text cleaner.


[demo online](https://zoghal.github.io/virastar/)

[download offline](https://github.com/zoghal/virastar/releases/)

----

<p dir="auto">ویراستار به شما کمک می‌کند تا متون فارسی زیبا‌تر و درست‌تری بنویسید.</p>
<p dir="auto">ویراستار به طور پیش فرض این کار‌ها را انجام می‌دهد:</p>
<ul dir="auto">
<li>۱. نویسه‌های عربی را به فارسی تبدیل می‌کند. مثلا کاف و یای عربی.</li>
<li>۲. نویسه‌های انگلیسی رایج در تایپ فارسی را به معادل صحیح فارسی آن تبدیل می‌کند، مثلا تبدیل کامای انگلیسی به ویرگول (،)، یا نقطه ویرگول به جای semicolon (؛) و یا استفاده از «گیومه‌های فارسی»</li>
<li>۳. اعداد عربی و انگلیسی و علائم ریاضی را به معادل فارسی آن‌ها تبدیل می‌کند. مثلا: ۱۲٪ ۴۵۶</li>
<li>۴. سه نقطه را به نویسه صحیح آن که تنها یک نویسه است تبدیل کرده و فاصله گذاری آن را اصلاح می‌کند…</li>
<li>۵. در ترکیباتی مانند «خانهٔ پدری» که با «ه» تمام می‌شوند نشانه «ی» کسرهٔ اضافه را به «هٔ» تبدیل می‌کند.</li>
<li>۶. دو علامت منهای پی در پی را به خط کشیده کوتاه (–) و سه علامت منهای پی در پی را به خط کشیده بلند (—) تبدیل می‌کند.</li>
<li>۷. فاصله گذاری را تصحیح می‌کند. بین هر کلمه تنها یک فاصله و بین پیشوندها و پسوندهای مانند «می‌»، «‌تر» و «‌ترین» یک نیم فاصله قرار می‌دهد. بین ویرگول یا نقطه و کلمه قبل آن فاصله را حذف می‌کند.</li>
<li>۸. فاصله گذاری را برای متون بین «گیومه»، {آکولاد}، [کروشه] و (پرانتز) تنظیم می‌کند.</li>
<li>۹. علامت تعحب و سوال اضافی را حذف می‌کند؟!</li>
<li>۱۰. جدید: پشتیبانی از پیشوندها [ام|ات|اش|ای|اید|ایم|اند|هایی|هایم|هایت|هایش|هایمان|هایتان|هایشان] مثل (نمی‌توانم، پی‌ام‌هایت، خانه‌‌ام، خانه‌هایتان، خانه‌‌اید)</li>
<li>۱۱. جدید: پشتیبانی از پسوندهای [بی] مثل (بی‌تفاوتی، بی‌شرافت)</li>
</ul>







## Usage
```js
var Virastar = require('virastar');
var virastar = new Virastar();

virastar.cleanup("فارسي را كمی درست تر می نويسيم");
// Outputs: "فارسی را کمی درست‌تر می‌نویسیم"
```

### Browser
```html
<script src="lib/virastar.js"></script>
<script>
  var virastar = new Virastar();
  alert(virastar.cleanup("فارسي را كمی درست تر می نويسيم"));
</script>
```

#### Virastar([text] [,options])

##### text
Type: `string`

String of Persian source to be cleaned.

##### options
Type: `object`

```js
Virastar("سلام 123" ,{"fix_english_numbers":false});
// Outputs:"سلام 123"
```

## Options and Specifications
Virastar comes with a list of options to control its behavior.

_all options are enabled by default._

* `normalize_eol`
	- replace Windows end of lines with Unix EOL (`\n`)


* `fix_dashes`
	- replace double dash to ndash and triple dash to mdash


* `fix_three_dots`
	- replace three dots with ellipsis


* `fix_english_quotes_pairs`
	- replace English quotes pairs (`“”`) with their Persian equivalent (`«»`)


* `fix_english_quotes`
	- replace English quotes, commas and semicolons with their Persian equivalent


* `fix_hamzeh`
	- convert `ه ی` to `هٔ`


* `cleanup_rlm`
	- converting Right-to-left marks followed by Persian characters to zero-width non-joiners (ZWNJ)


* `cleanup_zwnj`
	- remove more than one zwnj chars  
	- remove unnecessary zwnj chars that are succeeded/preceded by a space  
	- clean zwnj chars after Persian characters that don't conncet to the next letter  
	- clean zwnj chars before English characters  
	- clean zwnj chars after and before punctuation  


* `fix_arabic_numbers`
	- replace Arabic numbers with their Persian equivalent


* `fix_english_numbers`
	- replace English numbers with their Persian equivalent
	- should not replace English numbers in English phrases


* `skip_markdown_ordered_lists_numbers_conversion`
	- skip converting English numbers of ordered lists in markdown


* `fix_misc_non_persian_chars`
	- replace Arabic kaf and Yeh with its Persian equivalent


* `fix_question_mark`
	- replace question marks with its Persian equivalent


* `fix_perfix_spacing`
	- put zwnj between word and prefix (`mi*` `nemi*`)


* `fix_suffix_spacing`
	- put zwnj between word and suffix (`*tar` `*tarin` `*ha` `*haye`)


* `fix_spacing_for_braces_and_quotes`
	- fix spacing for `()` `[]` `{}`  `“”` `«»` (one space outside, no space inside)
	- correct `:;,.?!` spacing (one space after and no space before)


* `cleanup_spacing`
	- replace more than one space with just a single one


* `cleanup_begin_and_end`
	- remove spaces, tabs, and new lines from the beginning and end of text

#### aggressive editing
* `aggresive`
	- enable/disable aggressive editing


* `cleanup_extra_marks`
	- replace more than one `!` or `?` mark with just one

* `kashidas_as_parenthetic`
	- replace kashidas to ndash in parenthetic

* `cleanup_kashidas`
	- remove all kashidas

#### extras
* `preserve_HTML`
	- preserve all HTML tags


* `preserve_URIs`
	- preserve all URI links in the text


* `preserve_brackets`
	- preserve strings inside square brackets (`[]`)


* `preserve_braces`
	- preserve strings inside curly braces (`{}`)

## License

This software is licensed under the MIT License. [View the license](LICENSE).

A javascript port of [aziz/virastar](https://github.com/aziz/virastar)