/* محتوى قسم الأساسيات — مسار بايثون
   أنواع الخطوات:
   info  : شرح قصير (h عنوان، b نص، code مثال قابل للتشغيل، viz رسم)
   mc    : اختيار من متعدد (o خيارات، a رقم الصحيح، mono خيارات بخط الكود، v=1 الخيار الصحيح = ناتج الكود)
   type  : اكتب ناتج الكود (a الناتج)
   fill  : املأ الفراغ ___ من بنك الكلمات (a الإجابات بالترتيب، out الناتج بعد الملء)
   order : رتّب الأسطر (lines بالترتيب الصحيح)
   bug   : اضغط على السطر الخاطئ (a رقم السطر من 0)
   code  : اكتب كوداً حقيقياً (tests: pre/post/in/out/end، must/ban تعابير، sol الحل)
   x = الشرح الذي يظهر بعد الإجابة */
var COURSE = [
/* ───────────────────────── 1 ───────────────────────── */
{id:'u1', t:'البداية', d:'أول أمر تكتبه، وكيف يقرأ بايثون برنامجك', l:[
 {id:'u1l1', t:'أول أمر: print', d:'اعرض نصاً على الشاشة', s:[
  {t:'info', h:'ما هو البرنامج؟', b:'البرنامج (program) قائمة تعليمات ينفذها الحاسوب <b>سطراً بعد سطر</b>. أول تعليمة نتعلمها هي <code>print()</code>: تعرض ما بين القوسين على الشاشة. جرّب تشغيل المثال.', code:'print("Hello")'},
  {t:'mc', q:'ماذا يفعل الأمر <code>print()</code>؟', o:['يعرض ما بين القوسين على الشاشة','يطبع الصفحة على الورق','يحفظ الملف','يحذف النص'], a:0, x:'print تعني «اعرض على الشاشة». لا علاقة لها بالطابعة.'},
  {t:'fill', q:'أكمل السطر ليعرض كلمة Hi', code:'___("Hi")', bank:['print','show','write','echo'], a:['print'], out:'Hi', x:'اسم الأمر في بايثون هو print وبأحرف صغيرة دائماً.'},
  {t:'type', q:'ماذا سيظهر على الشاشة؟', code:'print("Python")', a:'Python', x:'علامتا التنصيص تحددان بداية النص ونهايته، ولا تظهران في الناتج.'},
  {t:'info', h:'النص والرقم', b:'النص (string) يُكتب بين علامتي تنصيص <code>"..."</code>. الرقم يُكتب بدون تنصيص. بايثون يفرّق بين الأحرف الكبيرة والصغيرة: <code>print</code> صحيحة و <code>Print</code> خطأ.', code:'print("5 apples")\nprint(5)'},
  {t:'mc', q:'أي سطر مكتوب بشكل صحيح؟', mono:1, o:['Print("Hi")','print "Hi"','print("Hi")','print(Hi)'], a:2, x:'نحتاج print بأحرف صغيرة، ثم قوسين، وبداخلهما النص بين علامتي تنصيص.'},
  {t:'bug', q:'سطر واحد فيه خطأ. اضغط عليه.', code:'print("one")\nprint("two)\nprint("three")', a:1, x:'السطر الثاني فتح علامة تنصيص ولم يغلقها. كل " تحتاج " تقابلها.'},
  {t:'code', q:'اكتب برنامجاً يعرض الجملة: <code>Hello, Python!</code>', start:'', tests:[{out:'Hello, Python!'}], hint:'استخدم print وضع الجملة كما هي بين علامتي تنصيص.', sol:'print("Hello, Python!")'}
 ]},
 {id:'u1l2', t:'عدة أسطر وتعليقات', d:'ترتيب التنفيذ، والفاصلة، وعلامة #', s:[
  {t:'info', h:'من الأعلى إلى الأسفل', b:'بايثون ينفذ الأسطر <b>بالترتيب</b>: الأول ثم الثاني ثم الثالث. كل <code>print</code> يبدأ سطراً جديداً في الناتج.', code:'print("first")\nprint("second")'},
  {t:'order', q:'رتّب الأسطر ليظهر الناتج: 1 ثم 2 ثم 3', lines:['print("1")','print("2")','print("3")'], x:'ترتيب الأسطر في الكود هو ترتيب ظهورها في الناتج.'},
  {t:'info', h:'التعليق (comment)', b:'أي شيء بعد علامة <code>#</code> هو تعليق: ملاحظة لك أنت، وبايثون يتجاهلها تماماً. نستخدمه لشرح الكود أو لتعطيل سطر مؤقتاً.', code:'# هذا السطر لا ينفَّذ\nprint("B")  # وهذا تعليق في آخر السطر'},
  {t:'type', q:'ماذا سيظهر؟', code:'# print("A")\nprint("B")', a:'B', x:'السطر الأول كله تعليق فلا ينفَّذ.'},
  {t:'info', h:'عدة قيم في print واحدة', b:'يمكن أن تعطي <code>print</code> أكثر من قيمة تفصل بينها <b>فاصلة</b> <code>,</code>. بايثون يعرضها في سطر واحد ويضع <b>مسافة</b> بين كل قيمة والتي بعدها.', code:'print("Age:", 20)'},
  {t:'type', q:'ماذا سيظهر؟', code:'print("Hi", 5)', a:'Hi 5', x:'الفاصلة تضيف مسافة واحدة تلقائياً بين القيمتين.'},
  {t:'fill', q:'أكمل ليظهر: x y', code:'print("x"___ "y")', bank:[',','.',';',':'], a:[','], out:'x y', x:'الفاصلة , هي التي تفصل بين القيم داخل print.'},
  {t:'code', q:'اعرض ثلاثة أسطر بهذا الترتيب:<br><code>Ready</code><br><code>Set</code><br><code>Go</code>', start:'', tests:[{out:'Ready\nSet\nGo'}], hint:'ثلاث أوامر print، كل واحد في سطر.', sol:'print("Ready")\nprint("Set")\nprint("Go")'}
 ]},
 {id:'u1l3', t:'الأخطاء صديقتك', d:'اقرأ رسالة الخطأ وأصلح الكود', s:[
  {t:'info', h:'الخطأ ليس فشلاً', b:'كل مبرمج يرى أخطاء كل يوم. رسالة الخطأ تخبرك بشيئين: <b>نوع الخطأ</b> و<b>رقم السطر</b>. شغّل المثال واقرأ الرسالة.', code:'print("ok")\nprint(Hello)'},
  {t:'mc', q:'لماذا ظهر الخطأ <code>NameError</code> في <code>print(Hello)</code>؟', o:['لأن Hello بدون تنصيص فظنّها بايثون اسماً لا يعرفه','لأن print مكتوبة خطأ','لأن الكلمة إنجليزية','لأن القوسين ناقصان'], a:0, x:'NameError تعني: «هذا الاسم غير معرّف». بدون تنصيص، Hello ليست نصاً بل اسم.'},
  {t:'info', h:'SyntaxError', b:'<code>SyntaxError</code> تعني أن الكتابة نفسها تخالف قواعد اللغة: قوس لم يُغلق، تنصيص ناقص، أو رمز في غير مكانه. بايثون لا يشغّل أي سطر قبل إصلاحه.', code:'print("Hi"'},
  {t:'mc', q:'ما نوع الخطأ هنا؟', code:'print("Hi"', mono:0, o:['SyntaxError: قوس لم يُغلق','NameError: اسم غير معرّف','لا يوجد خطأ','الناتج Hi'], a:0, x:'القوس ( فُتح ولم يُغلق، وهذا خطأ كتابة.'},
  {t:'bug', q:'اضغط على السطر الذي سيسبب NameError', code:'print("Start")\nprint(Middle)\nprint("End")', a:1, x:'Middle بدون تنصيص، فيبحث بايثون عن اسم Middle ولا يجده.'},
  {t:'mc', q:'ظهرت لك رسالة خطأ. ما أول شيء تفعله؟', o:['أقرأ نوع الخطأ ورقم السطر','أحذف الكود وأبدأ من جديد','أعيد التشغيل حتى يعمل','أتجاهلها'], a:0, x:'نوع الخطأ يقول لك ما المشكلة، ورقم السطر يقول لك أين.'},
  {t:'code', q:'هذا البرنامج فيه خطآن. أصلحه ليعرض:<br><code>Start</code><br><code>Middle</code><br><code>End</code>', start:'print("Start")\nprint(Middle)\nprint("End"', tests:[{out:'Start\nMiddle\nEnd'}], hint:'خطأ في السطر 2 (تنصيص ناقص) وخطأ في السطر 3 (قوس ناقص).', sol:'print("Start")\nprint("Middle")\nprint("End")'}
 ]},
 {id:'u1c', ch:1, t:'تحدي الفصل', d:'بدون تلميحات جاهزة', s:[
  {t:'code', q:'ارسم هذا الشكل بالضبط (ثلاثة أسطر):<pre>*****\n* P *\n*****</pre>', start:'', tests:[{out:'*****\n* P *\n*****'}], hint:'كل سطر نص عادي داخل print.', sol:'print("*****")\nprint("* P *")\nprint("*****")'},
  {t:'code', q:'اعرض السطر <code>2 + 2 = 4</code> بحيث يكون <code>2 + 2 =</code> نصاً و <code>4</code> رقماً، في print واحدة.', start:'', tests:[{out:'2 + 2 = 4'}], must:[['print\\(\\s*["\'].*["\']\\s*,\\s*4\\s*\\)','استخدم print واحدة فيها نص ثم فاصلة ثم الرقم 4']], hint:'print("...", 4) — الفاصلة تضيف المسافة.', sol:'print("2 + 2 =", 4)'}
 ]}
]},
/* ───────────────────────── 2 ───────────────────────── */
{id:'u2', t:'المتغيرات والأنواع', d:'خزّن القيم بأسماء، واعرف نوع كل قيمة', l:[
 {id:'u2l1', t:'المتغير', d:'اسم يشير إلى قيمة', s:[
  {t:'info', h:'المتغير (variable)', b:'المتغير <b>اسم تحفظ فيه قيمة</b> لتستخدمها لاحقاً. تخيّله صندوقاً عليه ملصق. علامة <code>=</code> هنا لا تعني «يساوي»، بل تعني: <b>ضع القيمة التي على اليمين في الاسم الذي على اليسار</b>.', code:'age = 20\nprint(age)', viz:{k:'box', vars:[['age','20'],['name','"Sara"']]}},
  {t:'type', q:'ماذا سيظهر؟', code:'x = 5\nx = 8\nprint(x)', a:'8', x:'المتغير يحمل قيمة واحدة. التعيين الجديد يستبدل القديم.'},
  {t:'fill', q:'أكمل ليُعرض الاسم Sara', code:'___ = "Sara"\nprint(name)', bank:['name','"name"','print','Sara'], a:['name'], out:'Sara', x:'اسم المتغير يُكتب بدون تنصيص. "name" بتنصيص هو نص وليس متغيراً.'},
  {t:'mc', q:'أي اسم متغير <b>مقبول</b> في بايثون؟', mono:1, o:['2name','user-name','user_name','user name'], a:2, x:'الاسم يتكون من أحرف وأرقام و _ فقط، ولا يبدأ برقم، ولا يحتوي مسافة أو شرطة.'},
  {t:'type', q:'انتبه للترتيب. ماذا سيظهر؟', code:'a = 3\nb = a\na = 10\nprint(b)', a:'3', x:'السطر b = a نسخ القيمة 3 إلى b في تلك اللحظة. تغيير a بعدها لا يؤثر على b.'},
  {t:'order', q:'رتّب الأسطر ليظهر الناتج 5', lines:['x = 2','y = x + 3','print(y)'], x:'يجب تعريف المتغير قبل استخدامه: x أولاً، ثم y التي تعتمد عليه، ثم العرض.'},
  {t:'code', q:'أنشئ متغيراً اسمه <code>city</code> قيمته النص <code>Riyadh</code>، ثم اعرضه باستخدام اسم المتغير.', start:'', tests:[{out:'Riyadh'}], must:[['city\\s*=','عرّف متغيراً اسمه city'],['print\\(\\s*city\\s*\\)','اعرض المتغير نفسه: print(city)']], hint:'سطران: تعيين ثم print(city).', sol:'city = "Riyadh"\nprint(city)'}
 ]},
 {id:'u2l2', t:'أنواع البيانات', d:'int و float و str و bool', s:[
  {t:'info', h:'لكل قيمة نوع (type)', b:'<code>int</code> عدد صحيح مثل 7. <code>float</code> عدد عشري مثل 3.5. <code>str</code> نص مثل "hi". <code>bool</code> قيمة منطقية: <code>True</code> أو <code>False</code>. الأمر <code>type()</code> يخبرك بنوع أي قيمة.', code:'print(type(7))\nprint(type(3.5))\nprint(type("hi"))\nprint(type(True))', viz:{k:'types'}},
  {t:'mc', q:'ما نوع القيمة <code>"12"</code>؟', mono:1, o:['int','float','str','bool'], a:2, x:'التنصيص يجعلها نصاً حتى لو كان بداخله أرقام.'},
  {t:'mc', q:'ما نوع القيمة <code>3.0</code>؟', mono:1, o:['int','float','str','bool'], a:1, x:'وجود الفاصلة العشرية يجعل العدد float حتى لو كان الجزء العشري صفراً.'},
  {t:'fill', q:'أكمل بقيمة من نوع bool', code:'is_ready = ___\nprint(type(is_ready))', bank:['True','"True"','true','yes'], a:['True'], out:"<class 'bool'>", x:'القيمتان المنطقيتان تُكتبان بحرف أول كبير وبدون تنصيص: True و False.'},
  {t:'type', q:'جمع نصين يلصقهما. ماذا سيظهر؟', code:'print("5" + "5")', a:'55', x:'علامة + مع النصوص تعني الدمج (concatenation) وليس الجمع الحسابي.'},
  {t:'mc', q:'ماذا يحدث عند تشغيل هذا السطر؟', code:'print("5" + 5)', o:['يظهر 10','يظهر 55','خطأ TypeError','يظهر 5 5'], a:2, x:'لا يمكن جمع نص مع رقم. بايثون لا يخمّن قصدك، بل يعطي TypeError.'},
  {t:'code', q:'عرّف ثلاثة متغيرات: <code>name</code> من نوع str، و <code>age</code> من نوع int، و <code>height</code> من نوع float (اختر القيم كما تشاء).', start:'', tests:[{post:'print(type(name).__name__, type(age).__name__, type(height).__name__)', end:'str int float'}], hint:'مثال: name = "Ali" ثم age = 20 ثم height = 1.75', sol:'name = "Ali"\nage = 20\nheight = 1.75'}
 ]},
 {id:'u2l3', t:'التحويل والإدخال', d:'int() و str() و input()', s:[
  {t:'info', h:'التحويل بين الأنواع', b:'<code>int("4")</code> يحوّل النص إلى عدد صحيح. <code>str(4)</code> يحوّل العدد إلى نص. <code>float("2.5")</code> يحوّل إلى عدد عشري.', code:'print(int("4") + 1)\nprint(str(4) + "1")'},
  {t:'type', q:'ماذا سيظهر؟', code:'print(int("4") + 1)', a:'5', x:'بعد التحويل صار 4 رقماً فتم الجمع الحسابي.'},
  {t:'type', q:'ماذا سيظهر؟', code:'print(str(4) + "2")', a:'42', x:'بعد التحويل صار "4" نصاً فتم الدمج.'},
  {t:'info', h:'input(): اقرأ من المستخدم', b:'<code>input()</code> ينتظر أن يكتب المستخدم شيئاً ويعيده. القاعدة الذهبية: <b>الناتج دائماً نص (str)</b> حتى لو كتب المستخدم رقماً. في هذا التطبيق نعطي البرنامج مدخلات تجريبية تلقائياً.', code:'name = input()\nprint("Hello,", name)', inp:['Sara']},
  {t:'mc', q:'كتب المستخدم 25. ما نوع <code>age</code>؟', code:'age = input()', mono:1, o:['int','str','float','bool'], a:1, x:'input يعيد نصاً دائماً: "25" وليس 25.'},
  {t:'fill', q:'أكمل ليصبح n عدداً صحيحاً', code:'n = ___(input())\nprint(n + 1)', bank:['int','str','print','input'], a:['int'], x:'نغلّف input() داخل int() لنحوّل النص المقروء إلى عدد.'},
  {t:'code', q:'اقرأ اسماً من المستخدم، ثم اعرض <code>Hello,</code> متبوعة بالاسم.<br>مثال: المدخل <code>Ali</code> ← الناتج <code>Hello, Ali</code>', start:'', tests:[{in:['Ali'], out:'Hello, Ali'},{in:['Sara'], out:'Hello, Sara'}], hint:'name = input() ثم print("Hello,", name)', sol:'name = input()\nprint("Hello,", name)'},
  {t:'code', q:'اقرأ عدداً صحيحاً واعرض ضِعفه.<br>مثال: المدخل <code>4</code> ← الناتج <code>8</code>', start:'', tests:[{in:['4'], out:'8'},{in:['15'], out:'30'}], hint:'حوّل المدخل بـ int() قبل الضرب في 2.', sol:'n = int(input())\nprint(n * 2)'}
 ]},
 {id:'u2c', ch:1, t:'تحدي الفصل', d:'ادمج المتغيرات والتحويل والإدخال', s:[
  {t:'code', q:'اقرأ اسماً ثم عمراً (في سطرين). اعرض الاسم ثم <code>will be</code> ثم العمر بعد سنة.<br>مثال: <code>Ali</code> و <code>20</code> ← <code>Ali will be 21</code>', start:'', tests:[{in:['Ali','20'], out:'Ali will be 21'},{in:['Mona','34'], out:'Mona will be 35'}], hint:'العمر يحتاج int() قبل إضافة 1.', sol:'name = input()\nage = int(input())\nprint(name, "will be", age + 1)'},
  {t:'code', q:'بدّل قيمتي <code>a</code> و <code>b</code> بدون كتابة الأرقام من جديد، ليصبح الناتج <code>9 5</code>.', start:'a = 5\nb = 9\n# بدّل القيمتين هنا\n\nprint(a, b)', tests:[{out:'9 5'}], must:[['a\\s*=\\s*5','أبقِ السطر a = 5'],['b\\s*=\\s*9','أبقِ السطر b = 9'],['print\\(\\s*a\\s*,\\s*b\\s*\\)','أبقِ السطر print(a, b)']], hint:'استعن بمتغير ثالث مؤقت: temp = a', sol:'a = 5\nb = 9\ntemp = a\na = b\nb = temp\nprint(a, b)'}
 ]}
]},
/* ───────────────────────── 3 ───────────────────────── */
{id:'u3', t:'العمليات والنصوص', d:'الحساب، والتعامل مع النصوص، وتنسيق الناتج', l:[
 {id:'u3l1', t:'العمليات الحسابية', d:'+ - * / // % **', s:[
  {t:'info', h:'سبع عمليات', b:'<code>+</code> جمع، <code>-</code> طرح، <code>*</code> ضرب، <code>/</code> قسمة (الناتج دائماً float)، <code>//</code> قسمة صحيحة (تحذف الكسر)، <code>%</code> باقي القسمة، <code>**</code> أُس.', code:'print(7 / 2)\nprint(7 // 2)\nprint(7 % 2)\nprint(2 ** 3)'},
  {t:'type', q:'القسمة الصحيحة. ماذا سيظهر؟', code:'print(17 // 5)', a:'3', x:'17 ÷ 5 = 3 والباقي 2. العملية // تأخذ العدد 3 فقط.'},
  {t:'type', q:'باقي القسمة. ماذا سيظهر؟', code:'print(17 % 5)', a:'2', x:'% تعطي ما يتبقى بعد القسمة الصحيحة: 17 - (3×5) = 2.'},
  {t:'mc', q:'ماذا سيظهر؟', code:'print(10 / 2)', mono:1, v:1, o:['5','5.0','2','5,0'], a:1, x:'القسمة / تعطي float دائماً، حتى لو كان الناتج عدداً كاملاً.'},
  {t:'type', q:'الأولوية: الضرب قبل الجمع. ماذا سيظهر؟', code:'print(2 + 3 * 4)', a:'14', x:'يُحسب 3*4 أولاً ثم يُضاف 2. استخدم الأقواس لتغيير الترتيب: (2+3)*4 = 20.'},
  {t:'fill', q:'أكمل لتزيد x بمقدار 2 فيظهر 7', code:'x = 5\nx ___ 2\nprint(x)', bank:['+=','=+','==','++'], a:['+='], out:'7', x:'x += 2 اختصار لـ x = x + 2.'},
  {t:'mc', q:'كيف تعرف أن العدد n زوجي؟', mono:1, o:['n % 2 == 0','n / 2 == 0','n // 2 == 0','n ** 2 == 0'], a:0, x:'العدد الزوجي باقي قسمته على 2 يساوي صفراً. سنستخدم هذا كثيراً.'},
  {t:'code', q:'المتغير <code>total</code> فيه عدد ثوانٍ. اعرض الدقائق ثم الثواني المتبقية في سطر واحد.<br>مثال: 200 ثانية ← <code>3 20</code>', start:'total = 200\n', tests:[{out:'3 20'}], must:[['//','استخدم القسمة الصحيحة //'],['%','استخدم باقي القسمة %']], hint:'الدقائق = total // 60 والباقي = total % 60', sol:'total = 200\nprint(total // 60, total % 60)'}
 ]},
 {id:'u3l2', t:'النصوص', d:'الدمج، الطول، الفهرس، والدوال الجاهزة', s:[
  {t:'info', h:'النص سلسلة أحرف', b:'كل حرف له رقم موقع يسمى الفهرس (index) و<b>العدّ يبدأ من 0</b>. <code>len()</code> تعطي عدد الأحرف. الفهرس <code>-1</code> يعني آخر حرف.', code:'word = "python"\nprint(word[0])\nprint(word[-1])\nprint(len(word))', viz:{k:'list', name:'word', items:['p','y','t','h','o','n']}},
  {t:'type', q:'ماذا سيظهر؟', code:'print("python"[1])', a:'y', x:'الفهرس 0 هو p والفهرس 1 هو y. العدّ من صفر.'},
  {t:'type', q:'ماذا سيظهر؟', code:'print(len("hello"))', a:'5', x:'len تعدّ الأحرف: h e l l o = 5.'},
  {t:'type', q:'ضرب النص في عدد يكرره. ماذا سيظهر؟', code:'print("ab" * 3)', a:'ababab', x:'* مع النص تعني التكرار.'},
  {t:'type', q:'ماذا سيظهر؟', code:'print("Hi".upper())', a:'HI', x:'upper() تعيد نسخة بأحرف كبيرة، و lower() بأحرف صغيرة.'},
  {t:'fill', q:'أكمل ليظهر عدد أحرف الكلمة', code:'print(___("hello"))', bank:['len','size','count','length'], a:['len'], out:'5', x:'len اختصار length وهي تعمل مع النصوص والقوائم.'},
  {t:'mc', q:'ماذا يحدث؟', code:'word = "cat"\nprint(word[3])', o:['يظهر t','يظهر فراغ','خطأ IndexError','يظهر c'], a:2, x:'الفهارس المتاحة 0 و 1 و 2 فقط. الفهرس 3 خارج النص.'},
  {t:'code', q:'المتغير <code>word</code> جاهز. اعرض في سطر واحد: أول حرف، ثم آخر حرف، ثم عدد الأحرف.<br>مثال: python ← <code>p n 6</code>', start:'', tests:[{pre:'word = "python"', out:'p n 6'},{pre:'word = "code"', out:'c e 4'}], hint:'word[0] و word[-1] و len(word) مفصولة بفواصل داخل print.', sol:'print(word[0], word[-1], len(word))'}
 ]},
 {id:'u3l3', t:'تنسيق الناتج f-string', d:'ضع المتغيرات داخل النص', s:[
  {t:'info', h:'f-string', b:'ضع حرف <code>f</code> قبل علامة التنصيص، ثم اكتب أي متغير أو عملية داخل <code>{ }</code> وسيضع بايثون قيمتها مكانها. هذه أنظف طريقة لبناء جملة فيها قيم.', code:'name = "Ali"\nage = 20\nprint(f"{name} is {age} years old")'},
  {t:'type', q:'ماذا سيظهر؟', code:'name = "Ali"\nprint(f"Hi {name}")', a:'Hi Ali', x:'{name} استُبدلت بقيمة المتغير.'},
  {t:'mc', q:'نسينا حرف f. ماذا سيظهر؟', code:'name = "Ali"\nprint("Hi {name}")', mono:1, v:1, o:['Hi Ali','Hi {name}','Hi name','خطأ'], a:1, x:'بدون f النص عادي، والأقواس تُعرض كما هي.'},
  {t:'fill', q:'أكمل ليظهر: Total: 9', code:'x = 9\nprint(___"Total: {x}")', bank:['f','s','$','#'], a:['f'], out:'Total: 9', x:'حرف f قبل التنصيص هو ما يفعّل الأقواس { }.'},
  {t:'type', q:'يمكن وضع عملية داخل الأقواس. ماذا سيظهر؟', code:'print(f"{2 + 3} items")', a:'5 items', x:'ما بين { } يُحسب أولاً ثم يوضع ناتجه في النص.'},
  {t:'code', q:'اقرأ اسماً ثم عمراً، واعرض جملة بهذا الشكل بالضبط:<br><code>Ali is 20 years old</code>', start:'', tests:[{in:['Ali','20'], out:'Ali is 20 years old'},{in:['Noor','7'], out:'Noor is 7 years old'}], hint:'print(f"{name} is {age} years old")', sol:'name = input()\nage = input()\nprint(f"{name} is {age} years old")'}
 ]},
 {id:'u3c', ch:1, t:'تحدي الفصل', d:'حساب + إدخال + تنسيق', s:[
  {t:'code', q:'اقرأ سعر القطعة ثم الكمية (عددان صحيحان). اعرض الإجمالي بهذا الشكل:<br><code>Total: 150</code> (للسعر 50 والكمية 3)', start:'', tests:[{in:['50','3'], out:'Total: 150'},{in:['7','6'], out:'Total: 42'}], hint:'حوّل المدخلين بـ int ثم اضرب.', sol:'price = int(input())\nqty = int(input())\nprint(f"Total: {price * qty}")'},
  {t:'code', q:'اقرأ درجة حرارة مئوية (عدد صحيح) واعرضها بالفهرنهايت. المعادلة: <code>c * 9 / 5 + 32</code><br>مثال: <code>100</code> ← <code>212.0</code>', start:'', tests:[{in:['100'], out:'212.0'},{in:['0'], out:'32.0'},{in:['10'], out:'50.0'}], hint:'c = int(input()) ثم اعرض ناتج المعادلة.', sol:'c = int(input())\nprint(c * 9 / 5 + 32)'}
 ]}
]},
/* ───────────────────────── 4 ───────────────────────── */
{id:'u4', t:'الشروط', d:'اجعل برنامجك يتخذ قرارات', l:[
 {id:'u4l1', t:'المقارنة', d:'أسئلة جوابها True أو False', s:[
  {t:'info', h:'عمليات المقارنة', b:'المقارنة سؤال جوابه <code>True</code> أو <code>False</code>. <code>==</code> يساوي، <code>!=</code> لا يساوي، <code>&gt;</code> أكبر، <code>&lt;</code> أصغر، <code>&gt;=</code> أكبر أو يساوي، <code>&lt;=</code> أصغر أو يساوي.', code:'print(5 > 3)\nprint(5 == 3)\nprint(5 != 3)'},
  {t:'mc', q:'ما الفرق بين <code>=</code> و <code>==</code>؟', o:['= للتعيين و == للمقارنة','لا فرق','= للمقارنة و == للتعيين','== للأرقام فقط'], a:0, x:'x = 5 تضع 5 في x. أما x == 5 فتسأل: هل x تساوي 5؟'},
  {t:'type', q:'ماذا سيظهر؟', code:'print(3 != 3)', a:'False', x:'السؤال «هل 3 لا تساوي 3؟» جوابه لا.'},
  {t:'type', q:'ماذا سيظهر؟', code:'print(10 >= 10)', a:'True', x:'>= تعني أكبر <b>أو يساوي</b>، و10 تساوي 10.'},
  {t:'type', q:'الأحرف الكبيرة تختلف عن الصغيرة. ماذا سيظهر؟', code:'print("a" == "A")', a:'False', x:'مقارنة النصوص دقيقة: a و A حرفان مختلفان.'},
  {t:'fill', q:'أكمل ليظهر True', code:'print(7 ___ 7)', bank:['==','=','!=','<'], a:['=='], out:'True', x:'== تسأل عن التساوي. علامة = وحدها هنا خطأ كتابة.'},
  {t:'code', q:'اقرأ عدداً صحيحاً واعرض <code>True</code> إذا كان أكبر من 100 و <code>False</code> إذا لم يكن (بدون if).', start:'', tests:[{in:['150'], out:'True'},{in:['100'], out:'False'},{in:['5'], out:'False'}], ban:[['\\bif\\b','لا تحتاج if هنا: اعرض ناتج المقارنة مباشرة']], hint:'print(n > 100) تعرض ناتج المقارنة نفسه.', sol:'n = int(input())\nprint(n > 100)'}
 ]},
 {id:'u4l2', t:'if و else', d:'نفّذ كوداً فقط إذا تحقق شرط', s:[
  {t:'info', h:'if: إذا', b:'<code>if</code> تنفذ الأسطر التي تحتها <b>فقط إذا كان الشرط True</b>. قاعدتان لا تُنسيان: نقطتان <code>:</code> في آخر سطر if، و<b>إزاحة</b> (4 مسافات) قبل كل سطر تابع لها. <code>else</code> تحدد ما يحدث إذا لم يتحقق الشرط.', code:'age = 20\nif age >= 18:\n    print("adult")\nelse:\n    print("minor")', viz:{k:'flow', cond:'age >= 18', yes:'print("adult")', no:'print("minor")'}},
  {t:'mc', q:'ماذا سيظهر؟', code:'x = 5\nif x > 3:\n    print("big")\nprint("done")', mono:1, v:1, o:['big\ndone','big','done','لا شيء'], a:0, x:'الشرط تحقق فظهر big. السطر الأخير بدون إزاحة فهو خارج if وينفَّذ دائماً.'},
  {t:'mc', q:'والآن x = 1. ماذا سيظهر؟', code:'x = 1\nif x > 3:\n    print("big")\nprint("done")', mono:1, v:1, o:['big\ndone','big','done','لا شيء'], a:2, x:'الشرط False فتُتخطى الأسطر المُزاحة فقط. done خارج if.'},
  {t:'fill', q:'ما الرمز الناقص في آخر السطر؟', code:'x = 4\nif x > 0___\n    print("positive")', bank:[':',';','then','{'], a:[':'], out:'positive', x:'كل if و else تنتهي بنقطتين : ثم يبدأ الكود المُزاح.'},
  {t:'order', q:'رتّب الأسطر (انتبه للإزاحة)', lines:['age = 20','if age >= 18:','    print("adult")','else:','    print("minor")'], x:'if ثم كودها المُزاح، ثم else بمحاذاة if، ثم كودها المُزاح.'},
  {t:'bug', q:'اضغط على السطر الخاطئ', code:'score = 80\nif score >= 50:\nprint("pass")\nelse:\n    print("fail")', a:2, x:'السطر التابع لـ if يجب أن يكون مُزاحاً. بدون الإزاحة يعطي بايثون خطأ.'},
  {t:'code', q:'اقرأ عدداً صحيحاً. اعرض <code>even</code> إذا كان زوجياً و <code>odd</code> إذا كان فردياً.', start:'', tests:[{in:['4'], out:'even'},{in:['7'], out:'odd'},{in:['0'], out:'even'}], hint:'الشرط: n % 2 == 0', sol:'n = int(input())\nif n % 2 == 0:\n    print("even")\nelse:\n    print("odd")'}
 ]},
 {id:'u4l3', t:'elif والربط المنطقي', d:'أكثر من حالة، وأكثر من شرط', s:[
  {t:'info', h:'elif: وإلا إذا', b:'عند وجود أكثر من حالة نستخدم <code>elif</code>. بايثون يفحص الشروط من الأعلى و<b>ينفذ أول شرط يتحقق فقط</b> ثم يتخطى الباقي.', code:'score = 75\nif score >= 90:\n    print("A")\nelif score >= 70:\n    print("B")\nelse:\n    print("C")'},
  {t:'mc', q:'score = 95. كلا الشرطين صحيحان، فماذا سيظهر؟', code:'score = 95\nif score >= 70:\n    print("B")\nelif score >= 90:\n    print("A")', mono:1, v:1, o:['A','B','B\nA','لا شيء'], a:1, x:'أول شرط تحقق هو >= 70 فطُبع B وتوقف الفحص. لذلك نرتب الشروط من الأضيق إلى الأوسع.'},
  {t:'info', h:'and و or و not', b:'<code>and</code>: صحيح إذا تحقق الشرطان <b>معاً</b>. <code>or</code>: صحيح إذا تحقق <b>أحدهما</b> على الأقل. <code>not</code>: يعكس القيمة.', code:'x = 15\nprint(x > 10 and x < 20)\nprint(x < 5 or x > 12)\nprint(not x == 15)'},
  {t:'type', q:'ماذا سيظهر؟', code:'print(True and False)', a:'False', x:'and تحتاج الطرفين True.'},
  {t:'type', q:'ماذا سيظهر؟', code:'print(True or False)', a:'True', x:'or يكفيها طرف واحد True.'},
  {t:'mc', q:'أي شرط يتحقق فقط عندما يكون العمر بين 13 و 19 (شاملاً الطرفين)؟', mono:1, o:['age >= 13 or age <= 19','age >= 13 and age <= 19','age > 13 and age < 19','not age >= 13'], a:1, x:'نحتاج الشرطين معاً فنستخدم and، و >= و <= لتشمل الطرفين. مع or كل الأعمار تتحقق.'},
  {t:'code', q:'اقرأ درجة (عدد صحيح) واعرض التقدير:<br>90 فأكثر ← <code>A</code>، 75 فأكثر ← <code>B</code>، 50 فأكثر ← <code>C</code>، غير ذلك ← <code>F</code>', start:'', tests:[{in:['95'], out:'A'},{in:['90'], out:'A'},{in:['80'], out:'B'},{in:['50'], out:'C'},{in:['30'], out:'F'}], hint:'if ثم elif ثم elif ثم else، من الأعلى إلى الأدنى.', sol:'s = int(input())\nif s >= 90:\n    print("A")\nelif s >= 75:\n    print("B")\nelif s >= 50:\n    print("C")\nelse:\n    print("F")'}
 ]},
 {id:'u4c', ch:1, t:'تحدي الفصل', d:'قرارات متعددة', s:[
  {t:'code', q:'اقرأ ثلاثة أعداد صحيحة (كل عدد في سطر) واعرض أكبرها، بدون استخدام <code>max</code>.', start:'', tests:[{in:['3','9','5'], out:'9'},{in:['12','4','7'], out:'12'},{in:['1','2','8'], out:'8'},{in:['5','5','2'], out:'5'}], ban:[['\\bmax\\s*\\(','بدون max: استخدم if']], hint:'افترض أن الأول هو الأكبر، ثم قارنه بالثاني ثم بالثالث.', sol:'a = int(input())\nb = int(input())\nc = int(input())\nbig = a\nif b > big:\n    big = b\nif c > big:\n    big = c\nprint(big)'},
  {t:'code', q:'سعر التذكرة حسب العمر: أقل من 6 ← <code>0</code>، من 6 إلى 17 ← <code>10</code>، من 60 فأكثر ← <code>5</code>، غير ذلك ← <code>20</code>. اقرأ العمر واعرض السعر.', start:'', tests:[{in:['3'], out:'0'},{in:['6'], out:'10'},{in:['17'], out:'10'},{in:['18'], out:'20'},{in:['59'], out:'20'},{in:['60'], out:'5'}], hint:'رتّب الشروط: age < 6 ثم age < 18 ثم age >= 60 ثم else.', sol:'age = int(input())\nif age < 6:\n    print(0)\nelif age < 18:\n    print(10)\nelif age >= 60:\n    print(5)\nelse:\n    print(20)'}
 ]}
]},
/* ───────────────────────── 5 ───────────────────────── */
{id:'u5', t:'الحلقات', d:'كرّر الكود بدل أن تنسخه', l:[
 {id:'u5l1', t:'while', d:'كرّر ما دام الشرط صحيحاً', s:[
  {t:'info', h:'حلقة while', b:'<code>while</code> تشبه if لكنها <b>تعيد الفحص</b> بعد كل تنفيذ: ما دام الشرط True تكرر الكود المُزاح. لا بد أن يتغير شيء داخل الحلقة يجعل الشرط False في النهاية، وإلا دارت بلا توقف.', code:'i = 1\nwhile i <= 3:\n    print(i)\n    i += 1\nprint("done")', viz:{k:'loop', v:'i', items:['1','2','3'], body:'print(i)'}},
  {t:'mc', q:'كم مرة تُطبع كلمة hi؟', code:'i = 0\nwhile i < 4:\n    print("hi")\n    i += 1', o:['3','4','5','بلا توقف'], a:1, x:'i تأخذ القيم 0 و1 و2 و3 (أربع مرات)، وعند 4 يصبح الشرط False.'},
  {t:'mc', q:'ما مشكلة هذا الكود؟', code:'i = 1\nwhile i <= 3:\n    print(i)', o:['حلقة لا نهائية لأن i لا تتغير','خطأ كتابة','يطبع 1 2 3 ثم يتوقف','لا يطبع شيئاً'], a:0, x:'نسينا i += 1 فيبقى الشرط True للأبد. هذه تسمى infinite loop.'},
  {t:'type', q:'ما القيمة النهائية؟', code:'n = 10\nwhile n > 0:\n    n -= 3\nprint(n)', a:'-2', x:'10 ← 7 ← 4 ← 1 ← -2. عند -2 يصبح الشرط False وتتوقف.'},
  {t:'fill', q:'أكمل لتعدّ الحلقة من 1 إلى 5', code:'i = 1\nwhile i ___ 5:\n    print(i)\n    i += 1', bank:['<=','<','==','>='], a:['<='], x:'<= لتدخل القيمة 5 نفسها. مع < تتوقف عند 4.'},
  {t:'order', q:'رتّب عدّاً تنازلياً من 3 إلى 1', lines:['n = 3','while n > 0:','    print(n)','    n -= 1'], x:'نبدأ بالقيمة، ثم الشرط، ثم العرض، ثم التغيير الذي يقرّبنا من نهاية الحلقة.'},
  {t:'code', q:'باستخدام <code>while</code> اعرض عدّاً تنازلياً من 5 إلى 1 (كل رقم في سطر) ثم السطر <code>Go!</code>', start:'', tests:[{out:'5\n4\n3\n2\n1\nGo!'}], must:[['\\bwhile\\b','استخدم while']], hint:'ابدأ بـ n = 5 وأنقص 1 في كل دورة. Go! خارج الحلقة.', sol:'n = 5\nwhile n >= 1:\n    print(n)\n    n -= 1\nprint("Go!")'}
 ]},
 {id:'u5l2', t:'for و range', d:'كرّر عدداً محدداً من المرات', s:[
  {t:'info', h:'حلقة for', b:'<code>for</code> تمر على سلسلة قيم واحدة واحدة. <code>range(3)</code> تولّد 0 و 1 و 2 (تبدأ من 0 و<b>لا تشمل</b> العدد الأخير). <code>range(1, 6)</code> تولّد من 1 إلى 5. <code>range(0, 10, 2)</code> تقفز بمقدار 2.', code:'for i in range(3):\n    print(i)', viz:{k:'loop', v:'i', items:['0','1','2'], body:'print(i)'}},
  {t:'mc', q:'ما الأعداد التي تولّدها <code>range(2, 5)</code>؟', mono:1, o:['2 3 4','2 3 4 5','3 4 5','2 5'], a:0, x:'تبدأ من الأول وتتوقف <b>قبل</b> الثاني.'},
  {t:'type', q:'ماذا سيظهر؟', code:'total = 0\nfor i in range(1, 4):\n    total += i\nprint(total)', a:'6', x:'i تأخذ 1 و2 و3 ومجموعها 6. هذا نمط «التجميع» وستستخدمه كثيراً.'},
  {t:'fill', q:'أكمل الكلمة الناقصة', code:'for i ___ range(3):\n    print(i)', bank:['in','of','to','='], a:['in'], x:'الصيغة دائماً: for متغير in سلسلة:'},
  {t:'mc', q:'for تمر على أحرف النص أيضاً. ماذا سيظهر؟', code:'for ch in "ab":\n    print(ch * 2)', mono:1, v:1, o:['aa\nbb','abab','ab\nab','a\nb'], a:0, x:'في الدورة الأولى ch = "a" وفي الثانية ch = "b".'},
  {t:'type', q:'كم مرة تدور الحلقة؟ ماذا سيظهر؟', code:'c = 0\nfor i in range(0, 10, 2):\n    c += 1\nprint(c)', a:'5', x:'القيم: 0 و2 و4 و6 و8، أي خمس دورات.'},
  {t:'code', q:'اقرأ عدداً n واعرض مجموع الأعداد من 1 إلى n.<br>مثال: <code>5</code> ← <code>15</code>', start:'', tests:[{in:['5'], out:'15'},{in:['10'], out:'55'},{in:['1'], out:'1'}], must:[['\\bfor\\b|\\bwhile\\b','استخدم حلقة']], hint:'total = 0 ثم for i in range(1, n + 1) وأضف i في كل دورة.', sol:'n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)'},
  {t:'code', q:'اقرأ عدداً n واعرض جدول ضربه من 1 إلى 5 بهذا الشكل:<br><code>3 x 1 = 3</code><br><code>3 x 2 = 6</code> ...', start:'', tests:[{in:['3'], out:'3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15'},{in:['7'], out:'7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35'}], hint:'داخل الحلقة: print(f"{n} x {i} = {n * i}")', sol:'n = int(input())\nfor i in range(1, 6):\n    print(f"{n} x {i} = {n * i}")'}
 ]},
 {id:'u5l3', t:'break و continue', d:'تحكّم في مسار الحلقة', s:[
  {t:'info', h:'اخرج أو تخطَّ', b:'<code>break</code> تُنهي الحلقة فوراً. <code>continue</code> تتخطى ما تبقى من الدورة الحالية وتنتقل للدورة التالية. وكثيراً ما نضع <code>if</code> داخل الحلقة لنختار ما نعالجه.', code:'for i in range(1, 6):\n    if i == 3:\n        continue\n    if i == 5:\n        break\n    print(i)'},
  {t:'mc', q:'ماذا سيظهر؟', code:'for i in range(5):\n    if i == 2:\n        break\n    print(i)', mono:1, v:1, o:['0\n1','0\n1\n2','0\n1\n3\n4','2'], a:0, x:'عند i = 2 تنتهي الحلقة كلها قبل الوصول إلى print.'},
  {t:'mc', q:'والآن مع continue. ماذا سيظهر؟', code:'for i in range(4):\n    if i == 2:\n        continue\n    print(i)', mono:1, v:1, o:['0\n1','0\n1\n3','0\n1\n2\n3','2'], a:1, x:'continue تتخطى الدورة التي فيها i = 2 فقط، ثم تكمل الحلقة.'},
  {t:'type', q:'عدّ الأعداد الزوجية. ماذا سيظهر؟', code:'c = 0\nfor i in range(1, 11):\n    if i % 2 == 0:\n        c += 1\nprint(c)', a:'5', x:'الزوجية بين 1 و10 هي 2 و4 و6 و8 و10. هذا نمط «العدّ بشرط».'},
  {t:'bug', q:'المطلوب طباعة الأعداد الفردية فقط. اضغط على السطر الخاطئ.', code:'for i in range(1, 8):\n    if i % 2 == 0:\n        print(i)', a:1, x:'الشرط i % 2 == 0 يختار الزوجية. للفردية نكتب i % 2 == 1 أو != 0.'},
  {t:'code', q:'اقرأ عدداً n واعرض الأعداد الفردية من 1 إلى n، كل عدد في سطر.<br>مثال: <code>7</code> ← 1 ثم 3 ثم 5 ثم 7', start:'', tests:[{in:['7'], out:'1\n3\n5\n7'},{in:['4'], out:'1\n3'},{in:['1'], out:'1'}], hint:'حلقة من 1 إلى n، وداخلها if i % 2 == 1.', sol:'n = int(input())\nfor i in range(1, n + 1):\n    if i % 2 == 1:\n        print(i)'}
 ]},
 {id:'u5c', ch:1, t:'تحدي الفصل', d:'مسألتان مشهورتان', s:[
  {t:'code', q:'FizzBuzz: لكل عدد من 1 إلى 15 اعرض:<br><code>FizzBuzz</code> إذا قبل القسمة على 3 و 5 معاً، <code>Fizz</code> إذا قبل القسمة على 3، <code>Buzz</code> إذا قبل القسمة على 5، وإلا فالعدد نفسه.', start:'', tests:[{out:'1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz'}], must:[['\\bfor\\b|\\bwhile\\b','استخدم حلقة']], hint:'افحص أولاً حالة القسمة على 3 و5 معاً (أو على 15)، وإلا سبقها شرط آخر.', sol:'for i in range(1, 16):\n    if i % 15 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)'},
  {t:'code', q:'اقرأ عدداً n وارسم مثلثاً من النجوم بعدد n من الأسطر.<br>مثال n = 3:<pre>*\n**\n***</pre>', start:'', tests:[{in:['3'], out:'*\n**\n***'},{in:['5'], out:'*\n**\n***\n****\n*****'}], hint:'تذكّر أن "*" * i يكرر النجمة i مرات.', sol:'n = int(input())\nfor i in range(1, n + 1):\n    print("*" * i)'}
 ]}
]},
/* ───────────────────────── 6 ───────────────────────── */
{id:'u6', t:'القوائم والقواميس', d:'خزّن مجموعة قيم في متغير واحد', l:[
 {id:'u6l1', t:'القائمة list', d:'عناصر مرتبة بين [ ]', s:[
  {t:'info', h:'القائمة (list)', b:'القائمة مجموعة قيم <b>مرتبة</b> بين قوسين مربعين. مثل النص: لكل عنصر فهرس يبدأ من 0، و <code>-1</code> هو الأخير، و <code>len()</code> تعطي العدد. والفرق أن القائمة <b>قابلة للتعديل</b>.', code:'nums = [4, 8, 15]\nprint(nums[0])\nprint(nums[-1])\nprint(len(nums))', viz:{k:'list', name:'nums', items:['4','8','15']}},
  {t:'type', q:'ماذا سيظهر؟', code:'nums = [4, 8, 15]\nprint(nums[1])', a:'8', x:'الفهرس 1 هو العنصر الثاني لأن العدّ من 0.'},
  {t:'fill', q:'أكمل لإضافة 7 في آخر القائمة', code:'nums = [4, 8]\nnums.___(7)\nprint(nums)', bank:['append','add','push','insert'], a:['append'], out:'[4, 8, 7]', x:'append تضيف عنصراً واحداً في نهاية القائمة.'},
  {t:'type', q:'عدّلنا عنصراً. ماذا سيظهر؟', code:'nums = [4, 8, 15]\nnums[0] = 1\nprint(nums)', a:'[1, 8, 15]', x:'nums[0] = 1 تستبدل العنصر الأول. القوائم قابلة للتعديل.'},
  {t:'mc', q:'ماذا يحدث؟', code:'nums = [4, 8, 15]\nprint(nums[3])', o:['يظهر 15','يظهر 0','خطأ IndexError','يظهر None'], a:2, x:'ثلاثة عناصر تعني الفهارس 0 و1 و2 فقط.'},
  {t:'type', q:'ماذا سيظهر؟', code:'a = [1, 2]\na.append(3)\na.append(4)\nprint(len(a))', a:'4', x:'عنصران ثم أضفنا اثنين.'},
  {t:'code', q:'القائمة <code>fruits</code> فيها عنصران. أضف إليها <code>"cherry"</code> ثم اعرض القائمة، ثم اعرض عدد عناصرها في سطر ثانٍ.', start:'fruits = ["apple", "banana"]\n', tests:[{out:"['apple', 'banana', 'cherry']\n3"}], must:[['\\.append\\(','استخدم append']], hint:'fruits.append("cherry") ثم print(fruits) ثم print(len(fruits))', sol:'fruits = ["apple", "banana"]\nfruits.append("cherry")\nprint(fruits)\nprint(len(fruits))'}
 ]},
 {id:'u6l2', t:'الحلقات على القوائم', d:'عالج كل عنصر', s:[
  {t:'info', h:'for مع القائمة', b:'<code>for x in قائمة</code> تعطيك العناصر واحداً واحداً. ومعها أدوات جاهزة: <code>sum()</code> المجموع، <code>max()</code> الأكبر، <code>min()</code> الأصغر، و <code>in</code> للسؤال: هل العنصر موجود؟', code:'nums = [5, 12, 3]\nfor x in nums:\n    print(x * 2)\nprint(sum(nums), max(nums))\nprint(12 in nums)', viz:{k:'loop', v:'x', items:['5','12','3'], body:'print(x * 2)'}},
  {t:'type', q:'ماذا سيظهر؟', code:'total = 0\nfor x in [2, 4, 6]:\n    total += x\nprint(total)', a:'12', x:'نمط التجميع نفسه، لكن هذه المرة على عناصر قائمة.'},
  {t:'type', q:'ماذا سيظهر؟', code:'print(7 in [1, 2, 3])', a:'False', x:'in تبحث عن القيمة داخل القائمة وتعيد True أو False.'},
  {t:'fill', q:'أكمل لتمرّ الحلقة على كل اسم', code:'names = ["Ali", "Sara"]\nfor n ___ names:\n    print(n)', bank:['in','of','from','at'], a:['in'], out:'Ali\nSara', x:'الصيغة نفسها دائماً: for عنصر in قائمة.'},
  {t:'mc', q:'ماذا سيظهر؟', code:'big = []\nfor x in [3, 20, 7, 15]:\n    if x > 10:\n        big.append(x)\nprint(big)', mono:1, v:1, o:['[20, 15]','[3, 7]','[3, 20, 7, 15]','2'], a:0, x:'نبدأ بقائمة فارغة ونضيف فقط ما يحقق الشرط. هذا نمط «التصفية».'},
  {t:'code', q:'القائمة <code>nums</code> جاهزة (لا تعرّفها). اعرض عدد العناصر الأكبر من 10.<br>مثال: [5, 12, 18, 3] ← <code>2</code>', start:'', tests:[{pre:'nums = [5, 12, 18, 3]', out:'2'},{pre:'nums = [1, 2]', out:'0'},{pre:'nums = [11, 12, 13, 10]', out:'3'}], hint:'عدّاد c = 0، وحلقة for، وشرط x > 10.', sol:'c = 0\nfor x in nums:\n    if x > 10:\n        c += 1\nprint(c)'},
  {t:'code', q:'القائمة <code>nums</code> جاهزة. اعرض أكبر عنصر فيها بدون استخدام <code>max</code>.', start:'', tests:[{pre:'nums = [5, 12, 18, 3]', out:'18'},{pre:'nums = [-4, -9, -1]', out:'-1'},{pre:'nums = [7]', out:'7'}], ban:[['\\bmax\\s*\\(','بدون max'],['\\bsort','بدون ترتيب: استخدم حلقة و if']], hint:'ابدأ بـ big = nums[0] ثم حدّثه كلما وجدت عنصراً أكبر.', sol:'big = nums[0]\nfor x in nums:\n    if x > big:\n        big = x\nprint(big)'}
 ]},
 {id:'u6l3', t:'القاموس dict', d:'مفتاح يقابله قيمة', s:[
  {t:'info', h:'القاموس (dictionary)', b:'القاموس يخزّن أزواجاً: <b>مفتاح (key)</b> يقابله <b>قيمة (value)</b>، بين <code>{ }</code>. نصل إلى القيمة باسم مفتاحها بدل رقم الفهرس.', code:'prices = {"tea": 5, "coffee": 8}\nprint(prices["coffee"])\nprices["juice"] = 6\nprint(len(prices))', viz:{k:'dict', name:'prices', items:[['"tea"','5'],['"coffee"','8']]}},
  {t:'type', q:'ماذا سيظهر؟', code:'ages = {"Ali": 20, "Sara": 25}\nprint(ages["Sara"])', a:'25', x:'نكتب المفتاح بين [ ] فنحصل على قيمته.'},
  {t:'type', q:'عدّلنا قيمة موجودة. ماذا سيظهر؟', code:'d = {"a": 1}\nd["a"] = 9\nprint(d["a"])', a:'9', x:'التعيين لمفتاح موجود يستبدل قيمته، ولمفتاح جديد يضيفه.'},
  {t:'mc', q:'ماذا يحدث؟', code:'d = {"a": 1}\nprint(d["b"])', o:['يظهر 0','يظهر None','خطأ KeyError','يظهر b'], a:2, x:'المفتاح b غير موجود. KeyError تعني: لا يوجد مفتاح بهذا الاسم.'},
  {t:'fill', q:'أكمل لإضافة مفتاح جديد', code:'stock = {"pen": 3}\nstock[___] = 10\nprint(len(stock))', bank:['"book"','book','"pen"','.book'], a:['"book"'], out:'2', x:'المفتاح النصي يُكتب بين علامتي تنصيص. أما "pen" فمفتاح موجود، والتعيين له يغيّر قيمته ولا يضيف جديداً.'},
  {t:'mc', q:'الحلقة على القاموس تمر على المفاتيح. ماذا سيظهر؟', code:'d = {"x": 1, "y": 2}\nfor k in d:\n    print(k, d[k])', mono:1, v:1, o:['x 1\ny 2','1\n2','x\ny','x y'], a:0, x:'k هو المفتاح، و d[k] قيمته.'},
  {t:'code', q:'القاموس <code>prices</code> جاهز وفيه أسعار. اعرض مجموع كل الأسعار.<br>مثال: {"tea": 5, "coffee": 8} ← <code>13</code>', start:'', tests:[{pre:'prices = {"tea": 5, "coffee": 8}', out:'13'},{pre:'prices = {"a": 1, "b": 2, "c": 3}', out:'6'}], hint:'total = 0 ثم for k in prices وأضف prices[k].', sol:'total = 0\nfor k in prices:\n    total += prices[k]\nprint(total)'}
 ]},
 {id:'u6c', ch:1, t:'تحدي الفصل', d:'قوائم + نصوص + حلقات', s:[
  {t:'code', q:'القائمة <code>nums</code> جاهزة. اعرض متوسط عناصرها (المجموع ÷ العدد).<br>مثال: [2, 4, 6] ← <code>4.0</code>', start:'', tests:[{pre:'nums = [2, 4, 6]', out:'4.0'},{pre:'nums = [1, 2]', out:'1.5'},{pre:'nums = [10]', out:'10.0'}], hint:'sum(nums) / len(nums)', sol:'print(sum(nums) / len(nums))'},
  {t:'code', q:'اقرأ كلمة (بأحرف صغيرة) واعرض عدد حروف العلة فيها: a e i o u.<br>مثال: <code>banana</code> ← <code>3</code>', start:'', tests:[{in:['banana'], out:'3'},{in:['sky'], out:'0'},{in:['audio'], out:'4'}], hint:'for ch in word ثم if ch in "aeiou".', sol:'word = input()\nc = 0\nfor ch in word:\n    if ch in "aeiou":\n        c += 1\nprint(c)'}
 ]}
]},
/* ───────────────────────── 7 ───────────────────────── */
{id:'u7', t:'الدوال', d:'اكتب الكود مرة واستخدمه مرات', l:[
 {id:'u7l1', t:'تعريف دالة', d:'def ثم الاستدعاء', s:[
  {t:'info', h:'الدالة (function)', b:'الدالة <b>كود له اسم</b>. نعرّفها مرة بـ <code>def</code> ثم نستدعيها باسمها متى شئنا. التعريف وحده <b>لا ينفّذ شيئاً</b>، والتنفيذ يحدث عند الاستدعاء: <code>greet()</code>.', code:'def greet():\n    print("Hello")\n\ngreet()\ngreet()', viz:{k:'func', name:'greet', inp:'', out:'Hello'}},
  {t:'mc', q:'ماذا سيظهر عند تشغيل هذا الكود فقط؟', code:'def greet():\n    print("Hello")', o:['لا شيء','Hello','خطأ','greet'], a:0, x:'عرّفنا الدالة ولم نستدعها. لا بد من كتابة greet() لتعمل.'},
  {t:'mc', q:'كم مرة تظهر كلمة Hi؟', code:'def hi():\n    print("Hi")\n\nhi()\nhi()\nhi()', o:['1','2','3','0'], a:2, x:'كل استدعاء ينفذ جسم الدالة مرة.'},
  {t:'fill', q:'أكمل الكلمة التي نعرّف بها دالة', code:'___ greet():\n    print("Hello")\n\ngreet()', bank:['def','func','function','define'], a:['def'], out:'Hello', x:'def اختصار define. بعدها الاسم ثم قوسان ثم نقطتان.'},
  {t:'order', q:'رتّب: تعريف الدالة ثم استدعاؤها', lines:['def line():','    print("-----")','line()'], x:'يجب أن يأتي التعريف قبل الاستدعاء، وجسم الدالة مُزاح.'},
  {t:'bug', q:'اضغط على السطر الخاطئ', code:'def hello()\n    print("Hi")\n\nhello()', a:0, x:'سطر def يجب أن ينتهي بنقطتين : مثل if و for.'},
  {t:'code', q:'عرّف دالة اسمها <code>greet</code> تعرض <code>Hello</code>. (سنستدعيها نحن للفحص)', start:'', tests:[{post:'greet()\ngreet()', end:'Hello\nHello'}], hint:'def greet(): ثم سطر مُزاح فيه print.', sol:'def greet():\n    print("Hello")'}
 ]},
 {id:'u7l2', t:'المعاملات و return', d:'أدخل قيماً وأخرج نتيجة', s:[
  {t:'info', h:'مدخلات ومخرجات', b:'المعاملات (parameters) متغيرات بين قوسي الدالة تستقبل قيماً عند الاستدعاء. و <code>return</code> <b>تعيد نتيجة</b> إلى من استدعى الدالة ليستخدمها. الفرق المهم: <code>print</code> تعرض فقط، أما <code>return</code> فتعطيك قيمة تخزّنها أو تحسب بها.', code:'def add(a, b):\n    return a + b\n\nresult = add(2, 3)\nprint(result * 10)', viz:{k:'func', name:'add', inp:'2, 3', out:'5'}},
  {t:'type', q:'ماذا سيظهر؟', code:'def add(a, b):\n    return a + b\n\nprint(add(4, 6))', a:'10', x:'a أخذت 4 و b أخذت 6 بالترتيب، وأعادت الدالة مجموعهما.'},
  {t:'type', q:'ناتج دالة يدخل في دالة. ماذا سيظهر؟', code:'def sq(x):\n    return x * x\n\nprint(sq(sq(2)))', a:'16', x:'sq(2) = 4 ثم sq(4) = 16.'},
  {t:'mc', q:'الدالة تعرض ولا تعيد. ماذا سيظهر؟', code:'def show(x):\n    print(x)\n\ny = show(5)\nprint(y)', mono:1, v:1, o:['5\nNone','5\n5','5','None'], a:0, x:'الدالة عرضت 5 لكنها لم تُعِد شيئاً، فقيمة y هي None. استخدم return عندما تحتاج النتيجة.'},
  {t:'fill', q:'أكمل لتعيد الدالة ضِعف العدد', code:'def double(n):\n    ___ n * 2\n\nprint(double(4))', bank:['return','print','give','output'], a:['return'], out:'8', x:'return تُخرج القيمة من الدالة.'},
  {t:'mc', q:'ماذا سيظهر؟ (انتبه لما بعد return)', code:'def f():\n    return 1\n    print("after")\n\nprint(f())', mono:1, v:1, o:['1','after\n1','1\nafter','after'], a:0, x:'return تُنهي الدالة فوراً. أي سطر بعدها داخل الدالة لا ينفَّذ.'},
  {t:'code', q:'عرّف دالة <code>double(n)</code> تعيد ضِعف العدد (بـ return).', start:'', tests:[{post:'print(double(4))', end:'8'},{post:'print(double(-3) + 1)', end:'-5'}], must:[['\\breturn\\b','استخدم return']], hint:'def double(n): ثم return n * 2', sol:'def double(n):\n    return n * 2'},
  {t:'code', q:'عرّف دالة <code>is_even(n)</code> تعيد <code>True</code> إذا كان العدد زوجياً و <code>False</code> إذا كان فردياً.', start:'', tests:[{post:'print(is_even(4), is_even(7), is_even(0))', end:'True False True'}], must:[['\\breturn\\b','استخدم return']], hint:'يمكن إعادة ناتج المقارنة مباشرة: return n % 2 == 0', sol:'def is_even(n):\n    return n % 2 == 0'}
 ]},
 {id:'u7l3', t:'قيم افتراضية ونطاق', d:'تفاصيل تجعل دوالك أقوى', s:[
  {t:'info', h:'القيمة الافتراضية', b:'يمكن إعطاء المعامل قيمة افتراضية (default) تُستخدم إذا لم تُرسَل قيمة عند الاستدعاء.', code:'def power(x, n=2):\n    return x ** n\n\nprint(power(3))\nprint(power(2, 3))'},
  {t:'type', q:'ماذا سيظهر؟', code:'def power(x, n=2):\n    return x ** n\n\nprint(power(5))', a:'25', x:'لم نرسل n فأخذت قيمتها الافتراضية 2.'},
  {t:'info', h:'النطاق (scope)', b:'المتغير الذي يُنشأ داخل الدالة <b>محلي</b>: يعيش داخلها فقط ويختفي عند انتهائها. لذلك نستخدم return لإخراج النتيجة.', code:'def calc():\n    inside = 5\n    return inside\n\nprint(calc())\nprint(inside)'},
  {t:'mc', q:'لماذا أعطى السطر الأخير في المثال السابق NameError؟', o:['لأن inside متغير محلي لا يُرى خارج الدالة','لأن الدالة لم تُستدعَ','لأن الاسم inside محجوز','لأن return خطأ'], a:0, x:'ما يُعرّف داخل الدالة يبقى داخلها.'},
  {t:'type', q:'دالة فيها حلقة. ماذا سيظهر؟', code:'def total(nums):\n    t = 0\n    for x in nums:\n        t += x\n    return t\n\nprint(total([1, 2, 3]))', a:'6', x:'كل ما تعلمته (حلقات، شروط، قوائم) يمكن وضعه داخل دالة.'},
  {t:'code', q:'عرّف دالة <code>max_of(nums)</code> تعيد أكبر عنصر في القائمة بدون استخدام <code>max</code>.', start:'', tests:[{post:'print(max_of([3, 9, 5]))', end:'9'},{post:'print(max_of([-4, -2, -8]))', end:'-2'}], ban:[['\\bmax\\s*\\(','بدون max']], must:[['\\breturn\\b','استخدم return']], hint:'النمط نفسه من فصل القوائم، لكن بـ return بدل print.', sol:'def max_of(nums):\n    big = nums[0]\n    for x in nums:\n        if x > big:\n            big = x\n    return big'},
  {t:'code', q:'عرّف دالة <code>count_vowels(word)</code> تعيد عدد حروف العلة (a e i o u) في الكلمة.', start:'', tests:[{post:'print(count_vowels("banana"), count_vowels("sky"), count_vowels("audio"))', end:'3 0 4'}], must:[['\\breturn\\b','استخدم return']], hint:'عدّاد وحلقة على الأحرف وشرط ch in "aeiou".', sol:'def count_vowels(word):\n    c = 0\n    for ch in word:\n        if ch in "aeiou":\n            c += 1\n    return c'}
 ]},
 {id:'u7c', ch:1, t:'التحدي الختامي', d:'كل الأساسيات في دوال', s:[
  {t:'code', q:'عرّف دالة <code>grade(score)</code> تعيد الحرف: 90 فأكثر <code>"A"</code>، 75 فأكثر <code>"B"</code>، 50 فأكثر <code>"C"</code>، غير ذلك <code>"F"</code>.', start:'', tests:[{post:'print(grade(95), grade(90), grade(80), grade(50), grade(10))', end:'A A B C F'}], must:[['\\breturn\\b','استخدم return']], hint:'if / elif / else وفي كل فرع return.', sol:'def grade(score):\n    if score >= 90:\n        return "A"\n    elif score >= 75:\n        return "B"\n    elif score >= 50:\n        return "C"\n    else:\n        return "F"'},
  {t:'code', q:'عرّف دالة <code>positive_sum(nums)</code> تعيد مجموع الأعداد الموجبة فقط في القائمة.<br>مثال: [3, -2, 5, -8] ← 8', start:'', tests:[{post:'print(positive_sum([3, -2, 5, -8]))', end:'8'},{post:'print(positive_sum([-1, -2]), positive_sum([]), positive_sum([4]))', end:'0 0 4'}], must:[['\\breturn\\b','استخدم return']], hint:'تجميع بشرط: أضف x فقط إذا كان x > 0.', sol:'def positive_sum(nums):\n    t = 0\n    for x in nums:\n        if x > 0:\n            t += x\n    return t'},
  {t:'code', q:'عرّف دالة <code>report(scores)</code> تستقبل قاموساً (اسم ← درجة) وتعرض لكل طالب سطراً بهذا الشكل: <code>Ali: pass</code> إذا كانت درجته 50 فأكثر، و <code>Ali: fail</code> إذا كانت أقل.', start:'', tests:[{post:'report({"Ali": 80, "Sara": 45, "Omar": 50})', end:'Ali: pass\nSara: fail\nOmar: pass'}], hint:'for name in scores ثم if scores[name] >= 50 واستخدم f-string للعرض.', sol:'def report(scores):\n    for name in scores:\n        if scores[name] >= 50:\n            print(f"{name}: pass")\n        else:\n            print(f"{name}: fail")'}
 ]}
]}
];
if (typeof module !== 'undefined') module.exports = COURSE;
