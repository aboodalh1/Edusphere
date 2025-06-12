import React from 'react';
import Navbar from '../components/Navbar'; // Assuming you have this component
import QuizCard from '../components/QuizCard'; // Assuming you have this component
import image1 from '../assets/image_1.png';
import image2 from '../assets/image_2.png';
import image3 from '../assets/image_3.png';
const Lecture = () => {
    const [rating, setRating] = React.useState(2);
    const [hoverRating, setHoverRating] = React.useState(0);
    const [email, setEmail] = React.useState('');
    const [comment, setComment] = React.useState('');

    return (
       <div className="bg-white" dir="rtl">
            <Navbar />

            <div className="mt-16">
                <header className="bg-primary-light py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-white">الخوارزميات وبنى المعطيات ٢</h1>
                    </div>
                </header>

             <nav className="bg-primary-light py-4 border-t border-white/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <a href="/lecture_2" className="p-4 rounded-lg min-w-[180px] text-center flex-shrink-0 bg-accent-teal text-primary-dark">
                <div>
                    <span className="block text-sm">المحاضرة الثانية</span>
                    <span className="block font-bold text-base mt-1">Binary Search Tree</span>
                </div>
            </a>
        </div>
    </div>
</nav>

                <div className="bg-gray-100 font-teshrin text-primary-dark">
                    <div className="container max-w-5xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg">

                        <h1 className="text-4xl font-bold text-center mb-8">الأشجار الثنائية <span className="ltr-inline">(Binary Trees)</span></h1>

                        <p className="text-lg leading-relaxed mb-6">
                            هل فكرت يوماً كيف يقوم نظام التشغيل في حاسوبك بتنظيم آلاف الملفات ضمن مجلدات متداخلة، أو كيف تتمكن محركات البحث من اقتراح الكلمات فوراً أثناء كتابتك؟
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            يكمن الجواب في هياكل البيانات الهرمية التي تُعرف بـ <strong className="text-primary-dark">الأشجار (Trees)</strong>. الشجرة هي بنية تتكون من عقد (nodes) مرتبطة ببعضها، حيث تكون كل عقدة بمثابة جذر الشجرة فرعية أصغر، تماماً مثلما يكون كل مجلد حاوياً لملفات ومجلدات أخرى.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            وكمثال تطبيقي دقيق تستخدم أنظمة الإكمال التلقائي <span className="ltr-inline">(Autocomplete)</span> نوعاً خاصاً من الأشجار يسمى <span className="ltr-inline">(Trie)</span> شجرة البادئات. في هذه الشجرة، يمثل كل مسار من الجذر سلسلة من الأحرف. عند كتابة كل حرف جديد، فأنت في الواقع تتجول في مسار محدد داخل الشجرة، وكل الفروع التي تنبثق من نقطة توقفك تمثل الاحتمالات والاقتراحات الممكنة.
                        </p>

                        <div className="my-6">
                            <img src={image1} alt="مثال لشجرة البادئات (Trie)" className="mx-auto rounded-lg shadow-md border-4 border-white" />
                        </div>

                        <p className="text-lg leading-relaxed mb-6">
                            في هذه المحاضرة سنتحدث عن الأشجار الثنائية <span className="ltr-inline">(Binary Trees)</span> وهي أي شجرة، كل عقدة فيها لها ابنان على الأكثر (أيسر وأيمن). لا توجد أي قواعد على القيم التي تحملها العقد.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            ومن المهم التنويه أن الفكرة من الأشجار الثنائية هي الأساس للتقسيم والتنظيم الهرمي، لكن التطبيقات الحقيقية تستخدم أنواعاً متخصصة من الأشجار تكون أكثر ملاءمة للمشكلة التي تحلها. لذلك سنشرح أفكار التجوال <span className="ltr-inline">(Traversal)</span> في الأشجار الثنائية حسب الأفكار الرئيسية الثلاثة.
                        </p>

                        <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b-2 border-gray-200">طرق التجوال <span className="ltr-inline">(Traversal)</span></h2>

                        <div className="my-6">
                            <img src={image2} alt="طرق التجوال" className="mx-auto rounded-lg shadow-md border-4 border-white" />
                            <figcaption className="text-center text-gray-500 text-sm mt-2">الطرق الرئيسية للتجوال في الأشجار. </figcaption>
                        </div>

                        <p className="text-lg leading-relaxed mb-6">
                            في كثير من الأحيان، لا يكفي أن نقوم بتخزين البيانات في شجرة، بل نحتاج إلى طريقة منهجية لزيارة كل عقدة فيها مرة واحدة بالضبط لتنفيذ عملية معينة، مثل طباعة جميع القيم، أو حساب مجموعها، أو حتى حذف الشجرة بأكملها. هذه العملية المنهجية تسمى <span className="ltr-inline">Traversal</span>.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            لا توجد طريقة واحدة "صحيحة" للتجوال، بل هناك ثلاث طرق رئيسية، كل منها يتبع ترتيباً مختلفاً، ويخدم أغراضاً مختلفة. لشرح الطرق الثلاث سنستخدم شجرة البحث الثنائية التالية كمثال موحد في جميع أنحاء المحاضرة.
                        </p>

                        <div className="my-6">
                            {/* Placeholder for the example tree image */}
                            <img src={image3} alt="شجرة مثال موحدة للتجوال" className="mx-auto rounded-lg shadow-md border-4 border-white" />
                            <figcaption className="text-center text-gray-500 text-sm mt-2">شجرة البحث الثنائية المستخدمة كمثال.</figcaption>
                        </div>

                        <h3 className="text-2xl font-semibold mt-6 mb-3">أولاً: التجوال بالترتيب <span className="ltr-inline">(In-Order Traversal)</span></h3>
                        <p className="text-lg leading-relaxed mb-4">
                            نستفيد منها في:
                        </p>
                        <ul className="list-disc mr-6 space-y-2 text-lg mb-4">
                            <li>قراءة محتويات الشجرة بشكل مرتب.</li>
                            <li>طباعة العناصر بشكل تصاعدي في حال كنا نتعامل مع <span className="ltr-inline">Binary Search Tree</span>.</li>
                        </ul>
                        <p className="text-lg leading-relaxed mb-4">
                            تقوم على مبدأ (<span className="ltr-inline">Left → Root → Right</span>):
                        </p>
                        <ol className="list-decimal mr-6 space-y-2 text-lg mb-6">
                            <li>تقوم بزيارة الشجرة الفرعية اليسرى بالكامل.</li>
                            <li>تعالج / تطبع الجذر الحالي.</li>
                            <li>تقوم بزيارة الشجرة الفرعية اليمنى بالكامل.</li>
                        </ol>

                        <h4 className="text-xl font-bold mt-6 mb-3">الكود:</h4>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">Pseudocode</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-pseudocode">{`Inorder(tree)
if tree == NULL:
    return
Inorder(tree.left)
visit(tree)
Inorder(tree.right)`}</code></pre>
                        </div>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">C++ Implementation</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`void Inorder(Node* tree) {
    if (tree != NULL) {
        Inorder(tree->left);
        std::cout << tree->data << " ";
        Inorder(tree->right);
    }
}`}</code></pre>
                        </div>
                        <p className="text-lg leading-relaxed mb-6">
                            مثال: عند تطبيق <span className="ltr-inline">in-order</span> على شجرتنا، ستكون النتيجة:
                        </p>
                        <p className="text-xl font-bold text-center ltr-inline mb-6">
                            8 → 4 → 9 → 2 → 10 → 5 → 1 → 10 → 3 → 11 → 6 → 12 
                        </p>

                        <h3 className="text-2xl font-semibold mt-10 mb-3">ثانياً: التجوال قبل الترتيب <span className="ltr-inline">(Pre-Order Traversal)</span></h3>
                        <p className="text-lg leading-relaxed mb-4">
                            نستفيد منها في:
                        </p>
                        <ul className="list-disc mr-6 space-y-2 text-lg mb-4">
                            <li>إنشاء نسخة طبق الأصل <span className="ltr-inline">(Copy)</span> من الشجرة. إذا قمت بأخذ تسلسل الأرقام الناتج عن هذا التجوال وأضفتها بالترتيب إلى شجرة جديدة فارغة، فستحصل على نفس هيكل الشجرة الأصلية تماماً.</li>
                            <li>مفيدة في تحليل التعابير الحسابية <span className="ltr-inline">(Expression Trees)</span>.</li>
                        </ul>
                        <p className="text-lg leading-relaxed mb-4">
                            تقوم على مبدأ (<span className="ltr-inline">Root → Left → Right</span>):
                        </p>
                        <ol className="list-decimal mr-6 space-y-2 text-lg mb-6">
                            <li>تعالج / تطبع الجذر الحالي.</li>
                            <li>تزور الشجرة الفرعية اليسرى بالكامل.</li>
                            <li>تزور الشجرة الفرعية اليمنى بالكامل.</li>
                        </ol>

                        <h4 className="text-xl font-bold mt-6 mb-3">الكود:</h4>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">Pseudocode</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-pseudocode">{`Preorder(tree)
if tree == NULL:
    return
visit(tree)
Preorder(tree.left)
Preorder(tree.right)`}</code></pre>
                        </div>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">C++ Implementation</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`void Preorder(Node* tree) {
    if (tree != NULL) {
        std::cout << tree->data << " ";
        Preorder(tree->left);
        Preorder(tree->right);
    }
}`}</code></pre>
                        </div>
                        <p className="text-lg leading-relaxed mb-6">
                            مثال: عند تطبيق <span className="ltr-inline">pre-order</span> على شجرتنا، ستكون النتيجة:
                        </p>
                        <p className="text-xl font-bold text-center ltr-inline mb-6">
                            1 → 2 → 4 → 8 → 9 → 5 → 10 → 3 → 10 → 6 → 11 → 12 
                        </p>

                        <h3 className="text-2xl font-semibold mt-10 mb-3">ثالثاً: التجوال بعد الترتيب <span className="ltr-inline">(Post-Order Traversal)</span></h3>
                        <p className="text-lg leading-relaxed mb-4">
                            الاستخدام الأهم لهذه الطريقة هو حذف الشجرة بأكملها من الذاكرة. بما أن هذه الطريقة تضمن زيارة الأبناء قبل زيارة الأب، يمكننا حذف العقد بأمان دون أن نفقد المؤشرات التي تقودنا إلى بقية الشجرة.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            تقوم على مبدأ (<span className="ltr-inline">Left → Right → Root</span>): 
                        </p>
                        <ol className="list-decimal mr-6 space-y-2 text-lg mb-6">
                            <li>تزور الشجرة الفرعية اليسرى بالكامل. </li>
                            <li>تزور الشجرة الفرعية اليمنى بالكامل. </li>
                            <li>تعالج / تطبع الجذر الحالي. </li>
                        </ol>

                        <h4 className="text-xl font-bold mt-6 mb-3">الكود:</h4>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">Pseudocode</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-pseudocode">{`Postorder(tree)
if tree == NULL:
    return
Postorder(tree.left)
Postorder(tree.right)
visit(tree)`}</code></pre>
                        </div>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">C++ Implementation</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`void Postorder(Node* tree) {
    if (tree != NULL) {
        Postorder(tree->left);
        Postorder(tree->right);
        std::cout << tree->data << " ";
    }
}`}</code></pre>
                        </div>
                        <p className="text-lg leading-relaxed mb-6">
                            مثال: عند تطبيق <span className="ltr-inline">post-order</span> على شجرتنا، ستكون النتيجة:
                        </p>
                        <p className="text-xl font-bold text-center ltr-inline mb-6">
                            8 → 9 → 4 → 10 → 5 → 2 → 10 → 11 → 12 → 6 → 3 → 1 
                        </p>

                        <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b-2 border-gray-200">خلاصة الأشجار الثنائية</h2>
                        <ul className="list-disc mr-6 space-y-3 text-lg mb-6">
                            <li>
                                في هذه المحاضرة تعلمنا الطرق الأساسية في التجوال في الأشجار وطبقنا هذا التعلم على الأشجار الثنائية كونها نموذج بسيط وسهل التعلم. 
                            </li>
                            <li>
                                ذكرنا أنها لا تستخدم بشكل مباشر بل نستخدم الأشجار المتخصصة والمنظمة بشكل أكبر في التطبيقات الواقعية. 
                            </li>
                            <li>
                                ذكرنا أن طرق التجوال الثلاث (<span className="ltr-inline">In-Order</span>، <span className="ltr-inline">Pre-Order</span>، و <span className="ltr-inline">Post-Order</span>) ليست مجرد خوارزميات نظرية بل هي أدوات عملية لكل منها استخداماته التي لا غنى عنها. 
                            </li>
                            <li>
                                فمن طباعة العناصر مرتبة، إلى نسخ الأشجار، وصولا إلى حذفها بأمان من الذاكرة، يفتح فهم هذه الطرق الباب أمام التعامل مع هياكل البيانات الشجرية بكفاءة وفعالية. 
                            </li>
                        </ul>

                        <div className="mt-10 p-6 bg-yellow-50 border-r-4 border-yellow-400 rounded-lg">
                            <p className="text-lg leading-relaxed text-yellow-800">
                                في المحاضرات القادمة، سنتعمق أكثر في أنواع متخصصة من الأشجار وكيف تساهم في حل مشاكل أكثر تعقيدا في عالم البرمجة. 
                            </p>
                        </div>

                        {/* References Section - MOVED HERE */}
                        <section className="bg-gray-200 p-6 rounded-xl shadow-inner mt-10 text-primary-dark">
                            <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-300">المصادر</h2>
                            <ul className="list-disc mr-6 space-y-2 text-lg">
                                <li>
                                    <a
                                        href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uoitc.edu.iq%2Fimages%2Fdocuments%2Finformatics-institute%2FCompetitive_exam%2FDataStructures.pdf&psig=AOvVaw3QsEe_2XpyqfX6-lp_m0Qz&ust=1749822454357000&source=images&cd=vfe&opi=89978449&ved=0CAYQrpoMahcKEwiws4PyguyNAxUAAAAAHQAAAAAQBA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline ltr-inline"
                                    >
                                        University of Information Technology and Communications - Data Structures PDF
                                    </a>
                                </li>
                            </ul>
                        </section>

                    </div> {/* End of container max-w-5xl */}
                </div> {/* End of bg-gray-100 */}
            </div> {/* End of mt-16 */}

            {/* Quiz Section - now follows the References */}
            <QuizSection />

            <section className="bg-background-subtle py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">تقييم المحاضرة</h2>
                    <div className="flex justify-center gap-2 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-10 h-10 cursor-pointer ${i < (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                onClick={() => setRating(i + 1)}
                                onMouseEnter={() => setHoverRating(i + 1)}
                                onMouseLeave={() => setHoverRating(0)}
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background-subtle pb-4">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <input
                        type="email"
                        className="w-full rounded-lg p-4 mb-4 border-none focus:ring-2 focus:ring-purple-400 transition"
                        placeholder="البريد الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        className="w-full rounded-lg p-4 min-h-[120px] border-none focus:ring-2 focus:ring-purple-400 transition"
                        placeholder="التعليق"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <div className="text-center mt-6">
                        <button className="bg-green-600 text-white py-3 px-12 rounded-full font-bold hover:bg-green-700 transition-colors">
                            إرسال
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end">
                        <p>تواصل معنا: edusphereacademy.info@gmail.com</p>
                    </div>
                </div>
            </footer>
        </div> );
};

// Quiz data for this specific lecture
const quizData = [
  {
    question: "ما هو الهدف الأساسي من Traversal في الشجرة الثنائية؟",
    options: [
      "حذف الشجرة",
      "زيارة كل عقدة مرة واحدة فقط لأداء عملية معينة",
      "تحويل الشجرة إلى جدول",
      "تنظيم العقد بترتيب تنازلي"
    ],
    correctAnswerIndex: 1
  },
  {
    question: "في أي نوع من Traversal يتم طباعة العناصر بترتيب تصاعدي في شجرة بحث ثنائية؟",
    options: [
      "Pre-order",
      "Post-order",
      "In-order",
      "Reverse-order"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "أي من التالي يعتبر الترتيب الصحيح في Pre-order Traversal؟",
    options: [
      "Left → Root → Right",
      "Right → Left → Root",
      "Root → Left → Right",
      "Left → Right → Root"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "ما هو التطبيق الأكثر استخدامًا لطريقة Post-order Traversal؟",
    options: [
      "ترتيب العناصر",
      "نسخ الشجرة",
      "حذف الشجرة بأمان",
      "البحث عن عنصر"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "ما هي الخاصية الرئيسية للأشجار الثنائية (Binary Trees)؟",
    options: [
      "كل عقدة لها فقط ابن أيمن",
      "كل عقدة يجب أن تحتوي على قيمة أكبر من الأب",
      "كل عقدة يمكن أن تملك ابنًا أيسرًا وابنًا أيمنًا بحد أقصى",
      "كل القيم تكون مرتبة دائمًا"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "أي من التالي ليس من فوائد In-Order Traversal؟",
    options: [
      "طباعة القيم مرتبة",
      "إنشاء نسخة مطابقة للشجرة",
      "استخراج القيم بتسلسل تصاعدي",
      "استخدامه مع شجرة بحث ثنائية"
    ],
    correctAnswerIndex: 1
  },
  {
    question: "ما الترتيب الصحيح لتنفيذ الخطوات في Post-order Traversal؟",
    options: [
      "Root → Left → Right",
      "Left → Root → Right",
      "Right → Left → Root",
      "Left → Right → Root"
    ],
    correctAnswerIndex: 3
  },
  {
    question: "أي من التالي يمكن تحقيقه باستخدام Pre-order Traversal؟",
    options: [
      "حذف الشجرة بأمان",
      "طباعة العناصر مرتبة",
      "إعادة إنشاء نفس هيكل الشجرة",
      "إيجاد الحد الأدنى للقيمة"
    ],
    correctAnswerIndex: 2
  }
];
// Re-using the QuizSection component from your previous structure, potentially with improvements
const QuizSection = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState(() => quizData.map(() => ({ selectedAnswer: null, isSubmitted: false })));

  const handleSelectOption = (questionIndex, optionIndex) => {
    if (answers[questionIndex].isSubmitted) return;

    const newAnswers = [...answers];
    newAnswers[questionIndex].selectedAnswer = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e, questionIndex) => {
    e.preventDefault();
    if (answers[questionIndex].selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[questionIndex].isSubmitted = true;
      setAnswers(newAnswers);
    }
  };
  
  const showQuestion = (index) => {
    console.log(`Attempting to show question at index: ${index}`);
    if (index < 0 || index >= quizData.length) return;
    setCurrentQuestionIndex(index);
  };

  return (
    <section id="quiz-section" className="bg-primary-dark min-h-screen flex flex-col items-center justify-center py-20 relative">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">زاوية التقييم</h1>

      <div className="w-full max-w-2xl">
        {/* Carousel Viewport */}
        <div className="overflow-hidden">
          {/* Carousel Track */}
          <div 
            id="carousel-track" 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${currentQuestionIndex * 100}%)` }}
          >
            {quizData.map((data, questionIndex) => {
              console.log(`Rendering Card ${questionIndex}:`, { 
                question: data.question, 
                answerState: answers[questionIndex] 
              });
              return (
                <QuizCard
                  key={questionIndex}
                 questionData={data}
                  answerState={answers[questionIndex]}
                  onSelectOption={(optionIndex) => handleSelectOption(questionIndex, optionIndex)}
                  onSubmit={(e) => handleSubmit(e, questionIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Prev Button */}
      <button 
        id="prev-btn" 
        className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 md:right-16 lg:right-32 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition disabled:opacity-0"
        onClick={() => showQuestion(currentQuestionIndex - 1)}
        disabled={currentQuestionIndex === 0}
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Next Button */}
      <button 
        id="next-btn" 
        className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 md:left-16 lg:left-32 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition disabled:opacity-0"
        onClick={() => showQuestion(currentQuestionIndex + 1)}
        disabled={currentQuestionIndex === quizData.length - 1}
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
    </section>
  );
};
export default Lecture;