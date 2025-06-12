import React from 'react';
import Navbar from '../components/Navbar';
import QuizCard from '../components/QuizCard';

const Lecture_2 = () => {
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
                        <h1 className="text-2xl font-bold text-white">الخوارزميات وبنى المعطيات ٣</h1>
                    </div>
                </header>

                <nav className="bg-primary-light py-4 border-t border-white/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            <a href="#" className="p-4 rounded-lg min-w-[180px] text-center flex-shrink-0 bg-accent-teal text-primary-dark">
                                <div>
                                    <span className="block text-sm">المحاضرة الثالثة</span>
                                    <span className="block font-bold text-base mt-1">Binary Search Trees</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </nav>

                <div className="bg-gray-100 font-teshrin text-primary-dark">
                    <div className="container max-w-5xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg">

                        <h1 className="text-4xl font-bold text-center mb-8">شجرة البحث الثنائية <span className="ltr-inline">(Binary Search Trees)</span></h1>

                        <p className="text-lg leading-relaxed mb-6">
                            هل سألت نفسك يوما عندما تفتح القاموس ما هي بنية البيانات التي قد تكون استخدمت لتنظيم الكلمات الكثيرة بهذا الشكل او مثلاً الأرقام الكبيرة التي نريد ترتيبها ماهي الطريقة الأنسب لهذا؟ 
                        </p>

                        <p className="text-lg leading-relaxed mb-6">
                            <span className="ltr-inline">(BST) Binary Search trees</span> هي بنية واحدة من أهم بنى المعطيات التي تقدم حلاً وسطاً ممتازا بين سرعة الوصول للبيانات والحفاظ على البيانات مرتبة. 
                        </p>

                        <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b-2 border-gray-200">ميزات شجرة البحث الثنائية</h2>
                        <ul className="list-disc mr-6 space-y-3 text-lg">
                            <li>تقدم سرعة فائقة في العمليات الأساسية. </li>
                            <li>
                                <strong>الحفاظ على البيانات مرتبة دائمًا:</strong> على عكس بنى بيانات أخرى سريعة مثل جدول التجزئة (<span className="ltr-inline">Hash Table</span>)، تحتفظ شجرة البحث الثنائية بعناصرها في ترتيب مصنف. هذا الترتيب يمنحنا مزايا قوية: 
                                <ul className="list-circle mr-6 mt-3 space-y-2">
                                    <li>سهولة إيجاد أكبر وأصغر قيمة. </li>
                                    <li>القدرة على استعراض جميع العناصر بالترتيب. </li>
                                    <li>إمكانية البحث عن نطاقات (<span className="ltr-inline">Range Queries</span>)، أي إيجاد كل العناصر بين قيمتين (مثلاً، كل الموظفين الذين تتراوح رواتبهم بين 5000 و 7000). </li>
                                </ul>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b-2 border-gray-200">بنية شجرة البحث الثنائية والخاصية الأساسية لها </h2>
                        <h3 className="text-2xl font-semibold mt-6 mb-3">قانون اليسار واليمين: البوصلة الداخلية للشجرة </h3>
                        <p className="text-lg leading-relaxed mb-4">
                            تعمل شجرة البحث الثنائية بقانون بسيط ومحدد: أي عقدة جديدة قيمتها أصغر من العقدة التي نقف عندها، توضع عند الابن الأيسر وأي عقدة قيمتها أكبر، توضع عند الابن الأيمن.  هذا القانون هو أساس عمل الشجرة كلها، حيث تعتبر كل عقدة هي "جذر" صغير لأبنائها، وكل ما يأتي أسفلها يتبع نفس هذا الترتيب المنظم. 
                        </p>

                        <h3 className="text-2xl font-semibold mt-6 mb-3">كفاءة شجرتنا تعتمد على شكلها </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                                <h4 className="text-xl font-bold text-green-800 mb-2">Balanced Tree (The Best Case) </h4>
                                <p>تكون قصيرة وعريضة، البحث فيها سريع جداً لأنك في كل خطوة تتخلص من نصف الخيارات. هذه هي الحالة المثالية <code className="ltr-inline bg-green-200 text-green-900 font-mono px-2 py-1 rounded">O(log n)</code>. </p>
                            </div>
                            <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                                <h4 className="text-xl font-bold text-red-800 mb-2">Unbalanced Tree (The Worst Case) </h4>
                                <p>تكون طويلة ونحيلة مثل العصا. تحدث هذه المشكلة إذا أضفت العناصر بالترتيب (1) ثم 2 ثم...... البحث فيها يصبح بطيئاً جداً، كأنك تبحث في قائمة عادية. هذه هي الحالة السيئة <code className="ltr-inline bg-red-200 text-red-900 font-mono px-2 py-1 rounded">O(n)</code>. لهذا السبب، اخترع المبرمجون أشجاراً "ذكية" مثل الأشجار الحمراء - السوداء (<span className="ltr-inline">Red-Black Trees</span>)، التي تعيد موازنة نفسها بنفسها كلما احتجت لذلك! </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b-2 border-gray-200">مثال عملي للإضافة </h2>
                        <p className="text-lg leading-relaxed mb-4">لنجرب بأنفسنا بمثال عملي لنفترض أننا نريد ترتيب هذه المجموعة من الأرقام (<span className="ltr-inline">6, 4, 8, 7, 2</span>): </p>
                        <ol className="list-decimal mr-6 space-y-2 text-lg">
                            <li><strong>الخطوة 1: الرقم (6):</strong> نأخذ أول رقم ونعتبره الجذر لشجرتنا. </li>
                            <li><strong>الخطوة 2: الرقم (4):</strong> نقارنه بالجذر.. بما أن (4 &lt; 6)، نضعه عند الابن الأيسر للعقدة 6. </li>
                            <li><strong>الخطوة 3: الرقم (8):</strong> نقارنه بالجذر.. بما أن (8 &gt; 6)، نضعه عند الابن الأيمن للعقدة 6. </li>
                            <li><strong>الخطوة 4: الرقم (7):</strong> نقارنه أولاً بالجذر 6 (أكبر، إذن نتجه يميناً). نجد العقدة 8 نقارن 7 مع 8. بما أن (7 &lt; 8)، نضع 7 عند الابن الأيسر للعقدة 8. </li>
                            <li><strong>الخطوة 5: الرقم (2):</strong> نقارنه بالجذر 6 (أصغر، إذن نتجه يساراً).  نجد العقدة 4 نقارن 2 مع 4. بما أن (2 &lt; 4)، نضع 2 عند الابن الأيسر للعقدة 4. </li>
                        </ol>
                        <p className="text-lg leading-relaxed mb-6">
                            وهكذا، يجد كل رقم مكانه الصحيح ببساطة عبر اتباع هذا القانون في كل مستوى. 
                        </p>

                        <h3 className="text-2xl font-semibold mt-6 mb-3">شجرة العائلة: كيف تعرف كل عقدة مكانها؟ </h3>
                        <p className="text-lg leading-relaxed mb-4">
                            لكي لا تضيع أي عقدة، كل عقدة (كائن) تعرف بالضبط من هم أفراد عائلتها: 
                        </p>
                        <ul className="list-disc mr-6 space-y-3 text-lg mb-4">
                            <li><span className="ltr-inline">Left:</span> مؤشر لابنها الأيسر (القيم الأصغر). </li>
                            <li><span className="ltr-inline">Right:</span> مؤشر لابنها الأيمن (القيم الأكبر). </li>
                            <li><span className="ltr-inline">p (parent):</span> مؤشر لأبيها (الجذر المباشر). </li>
                        </ul>
                        <p className="text-lg leading-relaxed mb-6">
                            العقدة الجذرية (<span className="ltr-inline">Root</span>) هي الجد الأكبر للعائلة، ليس لديها أب، لذا مؤشر الأب لديها يكون فارغاً (<span className="ltr-inline">Null</span>). 
                        </p>

                        <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b-2 border-gray-200">الكود وتطبيقه</h2>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">C++ Implementation</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`#include <iostream>

struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int value) {
        data = value;
        left = NULL;
        right = NULL;
    }
};

Node* insert(Node* root, int value) {
    if (root == NULL) {
        return new Node(value);
    }
    if (value < root->data) {
        root->left = insert(root->left, value);
    } else {
        root->right = insert(root->right, value);
    }
    return root;
}

void inorderTraversal(Node* root) {
    if (root != NULL) {
        inorderTraversal(root->left);
        std::cout << root->data << " ";
        inorderTraversal(root->right);
    }
}

int main() {
    Node* root = NULL;
    root = insert(root, 6);
    insert(root, 4);
    insert(root, 8);
    insert(root, 7);
    insert(root, 2);

    std::cout << "Inorder Traversal (Sorted Order): ";
    inorderTraversal(root);
    std::cout << std::endl;

    return 0;
}
`}</code></pre>
                        </div>

                        <h4 className="text-xl font-bold mt-6 mb-3">شرح الكود: </h4>
                        <ol className="list-decimal mr-6 space-y-3 text-lg mb-4">
                            <li>
                                <strong>بنية العقدة (<span className="ltr-inline">struct Node</span>):</strong> 
                                <p>هذا هو المخطط الأساسي لبناء الشجرة.  كل "عقدة" (<span className="ltr-inline">Node</span>) في الشجرة هي كائن من هذا النوع، وتحتوي على ثلاثة أشياء: </p>
                                <ul className="list-circle mr-6 mt-2 space-y-1">
                                    <li><span className="ltr-inline">data:</span> القيمة الرقمية التي تخزنها العقدة (مثل 6 أو 4). </li>
                                    <li><span className="ltr-inline">left:</span> مؤشر (<span className="ltr-inline">pointer</span>) يشير إلى الابن الأيسر. </li>
                                    <li><span className="ltr-inline">right:</span> مؤشر (<span className="ltr-inline">pointer</span>) يشير إلى الابن الأيمن. </li>
                                </ul>
                            </li>
                            <li>
                                <strong>دالة الإضافة (<span className="ltr-inline">Node* insert(Node* root, int value)</span>):</strong> 
                                <p>هذه الدالة هي المسؤولة عن إضافة رقم جديد إلى الشجرة في مكانه الصحيح.  المدخلات: تأخذ "جذر" الشجرة الحالية، والقيمة الجديدة المراد إضافتها. </p>
                                <p>المنطق: </p>
                                <ul className="list-circle mr-6 mt-2 space-y-1">
                                    <li>إذا كانت الشجرة فارغة (<span className="ltr-inline">root == NULL</span>)، تنشئ عقدة جديدة وتجعلها هي الجذر. </li>
                                    <li>إذا كانت القيمة الجديدة أصغر من قيمة العقدة الحالية، تستدعي نفسها بشكل تعاودي على الابن الأيسر. </li>
                                    <li>إذا كانت القيمة الجديدة أكبر، تستدعي نفسها على الابن الأيمن. </li>
                                </ul>
                                <p>المخرجات: تعيد مؤشراً إلى جذر الشجرة بعد إضافة العنصر. </p>
                            </li>
                            <li>
                                <strong>دالة التجوال الترتيبي (<span className="ltr-inline">void inorderTraversal (Node* root)</span>):</strong> 
                                <p>وظيفتها هي زيارة كل عقد الشجرة وطباعة قيمتها بالترتيب (من الأصغر للأكبر).  المدخلات: تأخذ العقدة التي ستبدأ منها (عادة الجذر). </p>
                                <p>المنطق (الخطوات الثلاث): </p>
                                <ul className="list-circle mr-6 mt-2 space-y-1">
                                    <li>تستدعي نفسها على الابن الأيسر (لتصل إلى أصغر قيمة أولاً). </li>
                                    <li>تطبع قيمة العقدة الحالية. </li>
                                    <li>تستدعي نفسها على الابن الأيمن (لتزور القيم الأكبر). </li>
                                </ul>
                            </li>
                            <li>
                                <strong>الدالة الرئيسية (<span className="ltr-inline">int main()</span>):</strong> 
                                <ul className="list-circle mr-6 mt-2 space-y-1">
                                    <li>تنشئ مؤشراً باسم <span className="ltr-inline">root</span> وتجعله فارغاً (<span className="ltr-inline">NULL</span>)، للدلالة على أن الشجرة فارغة في البداية. </li>
                                    <li>تستخدم دالة <span className="ltr-inline">insert</span> بشكل متكرر لبناء الشجرة بنفس الأرقام الموجودة في مثالنا. </li>
                                    <li>بعد بناء الشجرة، تستدعي دالة <span className="ltr-inline">inorderTraversal</span> لطباعة جميع العناصر، والتي ستظهر مرتبة. </li>
                                </ul>
                            </li>
                        </ol>
                        <p className="text-lg leading-relaxed mb-6">
                            تعقيد الكود السابق هو <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">O(log n)</code> في أفضل حالة و <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">O(n)</code> في أسوأ حالة. لذلك من الأفضل استخدام <span className="ltr-inline">(Balanced trees)</span> لنضمن أننا دائما في الحالة المثالية في الإضافة والحذف والبحث. 
                        </p>

                        <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b-2 border-gray-200">الاستعلامات على الشجرة <span className="ltr-inline">(Queries on a Binary Search Tree)</span> </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            غالباً ما نحتاج للبحث عن مفتاح مخزن في شجرة بحث ثنائية. إلى جانب عملية البحث (<span className="ltr-inline">SEARCH</span>)، يمكن لأشجار البحث الثنائية أن تدعم استعلامات مثل العنصر الأدنى (<span className="ltr-inline">MINIMUM</span>)، والعنصر الأقصى (<span className="ltr-inline">MAXIMUM</span>)، واللاحق (<span className="ltr-inline">SUCCESSOR</span>)، والسابق (<span className="ltr-inline">PREDECESSOR</span>). في هذا القسم سوف ندرس هذه العمليات ونوضح كيفية دعم كل منها في زمن <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">O(h)</code> حيث <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">h</code> هو ارتفاع الشجرة. 
                        </p>

                        <div className="my-6">
                            <img src="/src/assets/image.png" alt="شجرة بحث ثنائية كمثال للاستعلامات" className="mx-auto rounded-lg shadow-md border-4 border-white" />
                            <figcaption className="text-center text-gray-500 text-sm mt-2">مثال لشجرة بحث ثنائية المستخدمة للاستعلامات.</figcaption>
                        </div>

                        <h3 className="text-2xl font-semibold mt-6 mb-3">أولاً: البحث <span className="ltr-inline">(Searching)</span> </h3>
                        <p className="text-lg leading-relaxed mb-4">
                            نقوم بعملية البحث عن طريق مفتاح معين (قيمة) ويقوم التابع المسؤول عن البحث بإرجاع مؤشر يدل على العقدة التي تحمل القيمة، وإن لم يجد يقوم بإرجاع <span className="ltr-inline">null</span>. 
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            في الشجرة المجاورة، للبحث عن المفتاح 13 في الشجرة، نتبع المسار <span dir="ltr" className="font-mono">15 → 6 → 7 → 13</span> بدءًا من الجذر. 
                        </p>

                        <h4 className="text-xl font-bold mt-6 mb-3">الكود:</h4>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">Pseudocode - TREE-SEARCH</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-pseudocode">{`TREE-SEARCH(x, k)
1 if x == NIL or k == x.key
2 return x
3 if k < x.key
4 return TREE-SEARCH(x.left, k)
5 else
6 return TREE-SEARCH(x.right, k)`}</code></pre>
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
                            <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`Node* treeSearchRecursive (Node* x, int k) {
    if (x == NULL || k == x->data)
        return x;
    if (k < x->data) {
        return treeSearchRecursive(x->left, k);
    } else {
        return treeSearchRecursive(x->right, k);
    }
}`}</code></pre>
                        </div>
                        <p className="text-lg leading-relaxed mb-6">
                            شرح الخوارزمية: يبدأ الإجراء بحثه من الجذر ويتتبع مسارًا بسيطًا نحو الأسفل في الشجرة، كما هو موضح في الشكل السابق. في كل قيمة يمر عليها يقارن المفتاح مع القيمة للعقدة التي يقف عليها. إذا كان المفتاحان متساويان ينتهي البحث. إذا كان المفتاح أكبر من قيمة العقدة يستمر بالبحث في الشجرة الفرعية اليمينية بنفس الطريقة، وإذا كان أصغر من القيمة يستمر البحث في الشجرة الفرعية اليسارية.  العقد التي تتم مواجهتها أثناء التعاود (<span className="ltr-inline">recursion</span>) تشكل مسارًا بسيطًا متجهًا للأسفل من جذر الشجرة، وبالتالي فإن وقت تشغيل <span className="ltr-inline">TREE-SEARCH</span> هو <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">O(h)</code>، حيث <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">h</code> هو ارتفاع الشجرة. 
                        </p>

                        <h3 className="text-2xl font-semibold mt-10 mb-3">ثانياً: العنصر الأدنى <span className="ltr-inline">(MINIMUM)</span> </h3>
                        <p className="text-lg leading-relaxed mb-4">
                            يمكننا دائما العثور على عنصر في شجرة بحث ثنائية يكون مفتاحه هو الأدنى (<span className="ltr-inline">minimum</span>) عن طريق اتباع مؤشرات الابن الأيسر بدءًا من الجذر حتى نواجه القيمة <span className="ltr-inline">Null</span>.  في المثال، أصغر عنصر هو 2. 
                        </p>

                        <h4 className="text-xl font-bold mt-6 mb-3">الكود:</h4>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">Pseudocode - TREE-MINIMUM</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-pseudocode">{`TREE-MINIMUM(x)
1 while x.left != NIL
2 x = x.left
3 return x`}</code></pre>
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
                            <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`Node* treeMinimum (Node* x) {
    if (x == NULL) {
        return NULL; // Or throw an exception for empty tree
    }
    while (x->left != NULL) {
        x = x->left;
    }
    return x;
}`}</code></pre>
                        </div>
                        <p className="text-lg leading-relaxed mb-6">
                            شرح الخوارزمية: يبدأ الإجراء بحثه من الجذر ويكون شرط التوقف أن يصل المؤشر إلى قيمة <span className="ltr-inline">Null</span>. وإذا لم يجدها فإنه يتوجه إلى الشجرة الفرعية اليسرى.  وفي نهاية البحث يعيد رقم العقدة التي يقف عندها المؤشر. 
                        </p>

                        <h3 className="text-2xl font-semibold mt-10 mb-3">ثالثاً: العنصر الأقصى <span className="ltr-inline">(MAXIMUM)</span> </h3>
                        <p className="text-lg leading-relaxed mb-4">
                            يمكننا دائما العثور على عنصر في شجرة بحث ثنائية يكون مفتاحه هو الأقصى (<span className="ltr-inline">maximum</span>) عن طريق اتباع مؤشرات الابن الأيمن بدءًا من الجذر حتى نواجه القيمة <span className="ltr-inline">Null</span>.  في المثال، أكبر عنصر هو 20. 
                        </p>

                        <h4 className="text-xl font-bold mt-6 mb-3">الكود:</h4>
                        <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">Pseudocode - TREE-MAXIMUM (Note: The provided pseudocode for Maximum was identical to Minimum, I've corrected it based on logic)</span>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-pseudocode">{`TREE-MAXIMUM(x)
1 while x.right != NIL
2 x = x.right
3 return x`}</code></pre>
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
                            <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`Node* treeMaximum (Node* x) {
    if (x == NULL) {
        return NULL; // Or throw an exception for empty tree
    }
    while (x->right != NULL) {
        x = x->right;
    }
    return x;
}`}</code></pre>
                        </div>
                        <p className="text-lg leading-relaxed mb-6">
                            شرح الخوارزمية: يبدأ الإجراء بحثه من الجذر ويكون شرط التوقف أن يصل المؤشر إلى قيمة <span className="ltr-inline">Null</span>. وإذا لم يجدها فإنه يتوجه إلى الشجرة الفرعية اليمنى.  وفي نهاية البحث يعيد رقم العقدة التي يقف عندها المؤشر. 
                        </p>

                        <h3 className="text-2xl font-semibold mt-10 mb-3">رابعاً: اللاحق <span className="ltr-inline">(successor)</span> </h3>
                        <p className="text-lg leading-relaxed mb-4">
                            يُعنى بالعثور على العقدة التالية مباشرة في الترتيب التصاعدي.  تخيل لو قمنا بطباعة كل عناصر الشجرة بالترتيب (2, 3, 4, 6, 7...)، فلاحق العقدة 6 هو 7، ولاحق العقدة 7 هو ... وهكذا. 
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            إيجاد اللاحق، تُقسم المشكلة إلى حالتين بسيطتين: 
                        </p>

                        <div className="bg-blue-50 border-r-4 border-primary-dark p-6 rounded-lg my-6 space-y-4 text-lg">
                            <div>
                                <h4 className="font-bold">الحالة الأولى: العقدة لديها ابن أيمن (فريق على اليمين) </h4>
                                <p>إذا كانت العقدة التي نبحث عن لاحقها (<span className="ltr-inline">x</span>) لديها شجرة فرعية على يمينها، فهذا يعني أن كل العناصر التالية لها في الترتيب موجودة في تلك الشجرة الفرعية اليمنى. </p>
                                <p><strong>المبدأ:</strong> اللاحق سيكون أصغر عنصر في هذه المجموعة التي على اليمين. </p>
                                <p><strong>الحل:</strong> ببساطة، نذهب إلى الشجرة الفرعية اليمنى، ونجد أصغر عنصر فيها باستخدام تابع <span className="ltr-inline">treeMinimum</span> الذي كتبناه سابقاً. </p>
                                <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-4">
                                    <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                        <span className="text-gray-400">Pseudocode & C++</span>
                                    </div>
                                    <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`// Pseudocode:
if x.right != NIL
    return TREE-MINIMUM(x.right)

// C++:
if (x->right != NULL) {
    return treeMinimum(x->right);
}`}</code></pre>
                                </div>
                                <p><strong>مثال:</strong> لإيجاد لاحق العقدة 15، نرى أن لديها ابناً أيمن (18). نطبق <span className="ltr-inline">treeMinimum</span> على الشجرة الفرعية التي تبدأ من 18، فنجد أن أصغر عنصر هناك هو 17. إذن، لاحق الـ 15 هو 17. </p>
                            </div>
                            <div>
                                <h4 className="font-bold">الحالة الثانية: العقدة ليس لديها ابن أيمن </h4>
                                <p>هنا الوضع يتطلب تفكيراً مختلفاً.  بما أنه لا يوجد فريق على اليمين، فهذا يعني أن كل العقد التي على يمينها (إن وجدت) هي في الحقيقة من "أسلافها" (آبائها وأجدادها). </p>
                                <p><strong>المبدأ:</strong> اللاحق سيكون أول "جد" نصادفه ونحن نصعد في الشجرة، نكون نحن العقدة أو أحد آبائها ابنه الأيسر. </p>
                                <p><strong>الحل:</strong> نبدأ بالصعود من العقدة إلى أبيها. نستمر في الصعود طالما كنا نحن العقدة الابن الأيمن لأبينا.  أول ما نصل إلى أب (<span className="ltr-inline">y</span>) نكون نحن ابنه الأيسر، يكون هذا الأب هو اللاحق الذي نبحث عنه. </p>
                                <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-4">
                                    <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                        <span className="text-gray-400">Pseudocode & C++</span>
                                    </div>
                                    <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`// Pseudocode:
y = x.p
while y != NIL and x == y.right
    x = y
    y = y.p
return y

// C++:
Node* y = x->parent;
while (y != NULL && x == y->right) {
    x = y;
    y = y->parent;
}
return y;`}</code></pre>
                                </div>
                                <p><strong>مثال:</strong> لإيجاد لاحق العقدة 13، نرى أنه ليس لديها ابن أيمن. نبدأ بالصعود. </p>
                                <ul className="list-circle mr-6 mt-2 space-y-1">
                                    <li>نحن (13) الابن الأيمن لأبينا (7). الشرط متحقق، نكمل الصعود يصبح (<span className="ltr-inline">x=7, y=6</span>). </li>
                                    <li>نحن (7) الابن الأيمن لأبينا (6). الشرط متحقق، نكمل الصعود. </li>
                                    <li>يصبح (<span className="ltr-inline">x=6, y=15</span>). </li>
                                    <li>نحن (6) الابن الأيسر لأبينا (15). هنا يتوقف الشرط <span className="ltr-inline">x == y.right</span>. </li>
                                    <li>نعيد قيمة <span className="ltr-inline">y</span> الحالية، وهي 15. إذن، لاحق الـ 13 هو 15. </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed mb-6">
                            هذه الخوارزمية تضمن لنا إيجاد العنصر التالي في الترتيب بكفاءة عالية وبزمن <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">O(h)</code>، حيث <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">h</code> هو ارتفاع الشجرة. 
                        </p>

                        <h3 className="text-2xl font-semibold mt-10 mb-3">خامساً: السابق <span className="ltr-inline">(Predecessor)</span> </h3>
                        <p className="text-lg leading-relaxed mb-4">
                            هو العثور على العقدة السابقة مباشرةً في الترتيب التصاعدي.  تخيل لو قمنا بطباعة كل عناصر الشجرة بالترتيب (2, 3, 4, 6, 7...)، فسابق العقدة 7 هو 6، وسابق العقدة 6 هو 4... وهكذا. 
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            لإيجاد السابق، تقسم المشكلة إلى حالتين بسيطتين: 
                        </p>

                        <div className="bg-blue-50 border-r-4 border-primary-dark p-6 rounded-lg my-6 space-y-4 text-lg">
                            <div>
                                <h4 className="font-bold">الحالة الأولى: العقدة لديها ابن أيسر (فريق على اليسار) </h4>
                                <p>إذا كانت العقدة التي نبحث عن سابقها (<span className="ltr-inline">x</span>) لديها شجرة فرعية على يسارها، فهذا يعني أن كل العناصر السابقة لها في الترتيب موجودة في تلك الشجرة الفرعية اليسرى. </p>
                                <p><strong>المبدأ:</strong> السابق سيكون أكبر عنصر في هذه المجموعة التي على اليسار. </p>
                                <p><strong>الحل:</strong> ببساطة، نذهب إلى الشجرة الفرعية اليسرى، ونجد أكبر عنصر فيها باستخدام تابع <span className="ltr-inline">TREE-MAXIMUM</span> الذي كتبناه سابقاً. </p>
                                <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-4">
                                    <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                        <span className="text-gray-400">Pseudocode & C++</span>
                                    </div>
                                    <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`// Pseudocode:
if x.left != NIL
    return TREE-MAXIMUM(x.left)

// C++ Example Call (assuming you have treeSearch and treePredecessor functions defined):
Node* nodeToTest1 = treeSearch(root, 6);
Node* predecessor1 = treePredecessor(nodeToTest1);
std::cout << "Predecessor of 6 is: " << predecessor1->data << std::endl;
`}</code></pre>
                                </div>
                                <p><strong>مثال إيجاد سابق العقدة 6:</strong> </p>
                                <ul className="list-circle mr-6 mt-2 space-y-1">
                                    <li><span className="ltr-inline">x</span> يشير إلى العقدة 6. </li>
                                    <li>الشرط <span className="ltr-inline">x.left != NIL</span> متحقق (لأن 3 هو الابن الأيسر). </li>
                                    <li>يتم استدعاء <span className="ltr-inline">TREE-MAXIMUM(x.left)</span> على العقدة 3، والذي بدوره يعيد العقدة 4. </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold">الحالة الثانية: العقدة ليس لديها ابن أيسر </h4>
                                <p>هنا الوضع يتطلب تفكيراً مختلفاً.  بما أنه لا يوجد فريق على اليسار، فهذا يعني أن كل العقد التي على يسارها (إن وجدت) هي في الحقيقة من "أسلافها" (آبائها وأجدادها). </p>
                                <p><strong>المبدأ:</strong> السابق سيكون أول "جد" نصادفه ونحن نصعد في الشجرة، نكون نحن العقدة أو أحد آبائها ابنه الأيمن. </p>
                                <p><strong>الحل:</strong> نبدأ بالصعود من العقدة إلى أبيها. نستمر في الصعود طالما كنا نحن العقدة الابن الأيسر لأبينا.  أول ما نصل إلى أب (<span className="ltr-inline">y</span>) نكون نحن ابنه الأيمن، يكون هذا الأب هو السابق الذي نبحث عنه. </p>
                                <div dir="ltr" className="bg-gray-800 text-white font-mono rounded-xl shadow-lg my-4">
                                    <div className="flex items-center justify-between px-4 py-2 bg-gray-700 rounded-t-xl">
                                        <span className="text-gray-400">Pseudocode & C++</span>
                                    </div>
                                    <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`// Pseudocode:
y = x.p
while y != NIL and x == y.left
    x = y
    y = y.p
return y

// C++ Example Call (assuming you have treeSearch and treePredecessor functions defined):
Node* nodeToTest2 = treeSearch(root, 17);
Node* predecessor2 = treePredecessor(nodeToTest2);
std::cout << "Predecessor of 17 is: " << predecessor2->data << std::endl;
`}</code></pre>
                                </div>
                                <p><strong>مثال إيجاد سابق العقدة 17:</strong> </p>
                                <ul className="list-circle mr-6 mt-2 space-y-1">
                                    <li><span className="ltr-inline">x</span> يشير إلى 17. <span className="ltr-inline">y</span> يشير إلى أبيها (18). </li>
                                    <li>الحلقة (<span className="ltr-inline">while</span>) الدورة الأولى: <span className="ltr-inline">y</span> (18) لا يساوي <span className="ltr-inline">NIL</span>، و <span className="ltr-inline">x</span> (17) هو الابن الأيسر لـ <span className="ltr-inline">y</span> (18). الشرط متحقق. </li>
                                    <li>ندخل الحلقة: <span className="ltr-inline">x</span> يصبح 18، و <span className="ltr-inline">y</span> يصبح أب الـ 18، أي 15. </li>
                                    <li>الحلقة (<span className="ltr-inline">while</span>) الدورة الثانية: <span className="ltr-inline">y</span> (15) لا يساوي <span className="ltr-inline">NIL</span>، ولكن <span className="ltr-inline">x</span> (18) ليس الابن الأيسر لـ <span className="ltr-inline">y</span> (15) (هو ابن 15 الأيمن). الشرط خاطئ. </li>
                                    <li>نخرج من الحلقة. </li>
                                    <li><span className="ltr-inline">return y:</span> نعيد قيمة <span className="ltr-inline">y</span> الحالية، وهي المؤشر إلى العقدة 15. </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed mb-6">
                            هذه الخوارزمية تضمن لنا إيجاد العنصر السابق في الترتيب بكفاءة عالية وبزمن <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">O(h)</code>، حيث <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">h</code> هو ارتفاع الشجرة. 
                        </p>

                        <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b-2 border-gray-200">الحذف من الشجرة <span className="ltr-inline">(Deletion on a Binary Search Tree)</span> </h2>
                        <p className="text-lg leading-relaxed mb-4">
                            تقوم عملية الحذف على إزالة عنصر من شجرة البحث الثنائية مع الإبقاء على الخاصية الأساسية للشجرة سليمة.  لضمان ذلك، يتم التعامل مع الحذف بناءً على عدد أبناء العقدة المراد حذفها، وتنقسم العملية إلى ثلاث حالات. 
                        </p>

                        <div className="bg-blue-50 border-r-4 border-primary-dark p-6 rounded-lg my-6 space-y-4 text-lg">
                            <div>
                                <h4 className="font-bold">الحالة الأولى: حذف عقدة ورقية (لا تملك أبناء - Leaf Node) </h4>
                                <p>هذه هي أبسط حالات الحذف. </p>
                                <p><strong>الآلية:</strong> يتم تعديل المؤشر في العقدة الأب، والذي كان يشير إلى العقدة المحذوفة، ليصبح <span className="ltr-inline">Null</span>. بعد ذلك، يتم تحرير الذاكرة المخصصة للعقدة. </p>
                                <p><strong>مثال:</strong> عند حذف العقدة (4)، وهي ابن أيسر للعقدة (3)، يتم تعديل مؤشر الابن الأيسر (<span className="ltr-inline">left</span>) للعقدة (3) ليصبح <span className="ltr-inline">Null</span>. </p>
                            </div>
                            <div>
                                <h4 className="font-bold">الحالة الثانية: حذف عقدة تملك ابناً واحداً </h4>
                                <p>تتطلب هذه الحالة إعادة ربط بسيطة في الشجرة. </p>
                                <p><strong>الآلية:</strong> يتم ربط العقدة الأب للعقدة المحذوفة مباشرة بالابن الوحيد للعقدة المحذوفة، مما يؤدي إلى "تجاوز" العقدة المحذوفة في هيكل الشجرة. </p>
                                <p><strong>مثال:</strong> عند حذف العقدة (18)، التي لها ابن أيسر واحد فقط (17)، يتم ربط والد العقدة (18)، وهو (15)، مباشرة بالعقدة (17) لتصبح الابن الأيمن الجديد للعقدة (15). </p>
                            </div>
                            <div>
                                <h4 className="font-bold">الحالة الثالثة: حذف عقدة تملك ابنين </h4>
                                <p>هذه هي الحالة الأكثر تعقيداً لأن إزالة العقدة مباشرة قد يؤدي إلى فصل الشجرة إلى جزأين. </p>
                                <p><strong>الآلية:</strong> لا يتم حذف العقدة (<span className="ltr-inline">z</span>) مباشرة، بل يتم استبدال قيمتها بقيمة "لاحقها" في الترتيب <span className="ltr-inline">(in-order successor)</span>، وهو العقدة (<span className="ltr-inline">y</span>). اللاحق (<span className="ltr-inline">y</span>) هو دائماً العقدة ذات القيمة الصغرى في الشجرة الفرعية اليمنى للعقدة (<span className="ltr-inline">z</span>).  بعد نسخ قيمة <span className="ltr-inline">y</span> إلى <span className="ltr-inline">z</span> يتم حذف العقدة الأصلية <span className="ltr-inline">y</span> من مكانها. </p>
                                <p className="text-lg leading-relaxed font-bold mt-4">ملاحظة هامة: عملية حذف اللاحق (<span className="ltr-inline">successor</span>) تقع دائماً تحت الحالة الأولى أو الثانية، لأنه لا يمكن أن يمتلك ابناً أيسر بحكم تعريفه كأصغر عنصر في الشجرة الفرعية اليمنى. </p>
                                <p><strong>مثال:</strong> عند حذف العقدة (6)، التي لها ابنان، يتم تحديد لاحقها وهو العقدة (7). تُنسخ القيمة 7 لتحل محل القيمة 6 في العقدة الأصلية. بعد ذلك، يتم تطبيق عملية حذف على العقدة (7) الأصلية من مكانها، وهي عملية تندرج تحت الحالات الأبسط. </p>
                            </div>
                        </div>

                        <div className="mt-10 bg-gray-800 text-white font-mono rounded-xl shadow-lg" dir="ltr">
                            <div className="px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">Pseudocode - TRANSPLANT & TREE-DELETE</span>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-pseudocode">{`TRANSPLANT(T, u, v)
if u.p == NIL
    T.root = v
else if u == u.p.left
    u.p.left = v
else
    u.p.right = v
if v != NIL
    v.p = u.p

TREE-DELETE(T, z)
1 if z.left == NIL
2     TRANSPLANT(T, z, z.right)
3 else if z.right == NIL
4     TRANSPLANT(T, z, z.left)
5 else
6     y = TREE-MINIMUM(z.right)
7     if y.p != z
8         TRANSPLANT(T, y, y.right)
9         y.right = z.right
10        y.right.p = y
11    TRANSPLANT(T, z, y)
12    y.left = z.left
13    y.left.p = y`}</code></pre>
                        </div>
                        <div className="mt-6 bg-gray-800 text-white font-mono rounded-xl shadow-lg" dir="ltr">
                            <div className="px-4 py-2 bg-gray-700 rounded-t-xl">
                                <span className="text-gray-400">C++ Implementation</span>
                            </div>
                            <pre className="p-4 overflow-x-auto"><code className="language-cpp">{`void transplant (Node*& root, Node* u, Node* v) {
    if (u->parent == NULL) {
        root = v;
    } else if (u == u->parent->left) {
        u->parent->left = v;
    } else {
        u->parent->right = v;
    }
    if (v != NULL) {
        v->parent = u->parent;
    }
}

void treeDelete (Node*& root, Node* z) {
    if (z == NULL) return;

    if (z->left == NULL) {
        transplant(root, z, z->right);
    } else if (z->right == NULL) {
        transplant(root, z, z->left);
    } else {
        Node* y = treeMinimum(z->right); // Assuming treeMinimum is accessible
        if (y->parent != z) {
            transplant(root, y, y->right);
            y->right = z->right;
            y->right->parent = y;
        }
        transplant(root, z, y);
        y->left = z->left;
        y->left->parent = y;
    }
    delete z;
}`}</code></pre>
                        </div>

                        <h4 className="text-xl font-bold mt-6 mb-3">شرح الأكواد: </h4>
                        <ol className="list-decimal mr-6 space-y-3 text-lg mb-4">
                            <li>
                                <strong>دالة <span className="ltr-inline">transplant(Node*& root, Node* u, Node* v)</span>:</strong> 
                                <p>هذه الدالة المساعدة هي قلب عملية الحذف. وظيفتها هي استبدال العقدة <span className="ltr-inline">u</span> بالعقدة <span className="ltr-inline">v</span> في الشجرة. تقوم بتحديث مؤشرات الأب والأبناء بشكل صحيح. إذا كانت <span className="ltr-inline">u</span> هي الجذر، فإن <span className="ltr-inline">v</span> تصبح الجذر الجديد. </p>
                            </li>
                            <li>
                                <strong>دالة <span className="ltr-inline">treeDelete(Node*& root, Node* z)</span>:</strong> 
                                <p>هذه هي دالة الحذف الرئيسية. </p>
                                <ul className="list-circle mr-6 mt-2 space-y-1">
                                    <li>الشرطان الأولان (<span className="ltr-inline">if</span>) و (<span className="ltr-inline">else if</span>) يعالجان الحالتين البسيطتين (الحالة 1 و 2). إذا كان لدى العقدة ابن واحد على الأكثر، يتم استدعاء <span className="ltr-inline">transplant</span> مباشرة لاستبدالها بابنها الذي قد يكون <span className="ltr-inline">NULL</span>. </li>
                                    <li>الشرط الأخير (<span className="ltr-inline">else</span>) يعالج الحالة الثالثة المعقدة (عند وجود ابنين). 
                                        <ul className="list-square mr-6 mt-2 space-y-1">
                                            {/* <li><span className="ltr-inline">Node* y = treeMinimum(z->right);</span> يتم إيجاد اللاحق. </li> */}
                                            {/* <li><span className="ltr-inline">if (y->parent != z)</span>: هذا الشرط مهم لمعالجة الحالة التي يكون فيها اللاحق هو الابن المباشر للعقدة <span className="ltr-inline">z</span>.  إذا لم يكن كذلك، نحتاج أولاً إلى "رفع" الابن الأيمن لـ <span className="ltr-inline">y</span> ليحل محل <span className="ltr-inline">y</span>. </li> */}
                                            <li><span className="ltr-inline">transplant(root, z, y);</span>: بعد تجهيز <span className="ltr-inline">y</span>، يتم استبدال <span className="ltr-inline">z</span> بـ <span className="ltr-inline">y</span> في موقع <span className="ltr-inline">z</span>. </li>
                                            {/* <li><span className="ltr-inline">y->left = z->left; y->left->parent = y;</span>: يتم ربط الشجرة الفرعية اليسرى لـ <span className="ltr-inline">z</span> لتصبح الشجرة الفرعية اليسرى لـ <span className="ltr-inline">y</span>. </li> */}
                                            <li><span className="ltr-inline">delete z;</span>: في النهاية، يتم تحرير الذاكرة التي كانت تشغلها العقدة <span className="ltr-inline">z</span>. </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ol>

                        <h2 className="text-3xl font-bold mt-10 mb-4 pb-2 border-b-2 border-gray-200">ملخص الأفكار </h2>
                        <ul className="list-disc mr-6 space-y-3 text-lg">
                            <li>
                                <strong>شجرة البحث الثنائية (<span className="ltr-inline">BST</span>):</strong> هي بنية بيانات هرمية لتنظيم القيم، تتبع كل عقدة فيها قاعدة أساسية: كل ما في فرعها الأيسر أصغر منها، وكل ما في فرعها الأيمن أكبر منها.  هذه الخاصية تضمن بقاء البيانات مرتبة دائماً. 
                            </li>
                            <li>
                                <strong>العمليات الأساسية:</strong> تعتمد جميع العمليات على التنقل بين العقد باستخدام مؤشراتها (<span className="ltr-inline">left, right, parent</span>). العمليات الأساسية مثل البحث، الإضافة، إيجاد العنصر الأدنى/الأقصى، وإيجاد اللاحق/السابق، تتم جميعها بكفاءة عالية عبر تتبع مسارات محددة داخل الشجرة. 
                            </li>
                            <li>
                                <strong>عملية الحذف:</strong> هي العملية الأكثر تعقيداً وتتطلب معالجة ثلاث حالات مختلفة (عقدة ورقية، عقدة بابن واحد، عقدة بابنين) لضمان الحفاظ على هيكل الشجرة وخصائصها. 
                            </li>
                            <li>
                                <strong>الكفاءة والتوازن:</strong> سرعة الشجرة تكمن في ارتفاعها (<span className="ltr-inline">h</span>). في الحالة المثالية (شجرة متوازنة)، يكون الأداء سريعاً جداً <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">O(log n)</code>. أما في الحالة الأسوأ (شجرة غير متوازنة)، فتفقد الشجرة ميزتها ويصبح أداؤها بطيئاً <code className="ltr-inline bg-blue-100 text-blue-900 font-mono px-2 py-1 rounded">O(n)</code>. هذا يؤكد على أهمية هياكل البيانات المتقدمة مثل الأشجار ذاتية التوازن. 
                            </li>
                        </ul>

                        <div className="mt-10 p-6 bg-yellow-50 border-r-4 border-yellow-400 rounded-lg">
                            <p className="text-lg leading-relaxed text-yellow-800">
                                وهكذا نكون قد وصلنا إلى نهاية هذه المحاضرة وقد رأينا أن كفاءة الشجرة تعتمد على توازنها.  لكن ماذا لو كانت الشجرة غير متوازنة؟ في المحاضرة القادمة: سندخل عالم الأشجار ذاتية التوازن (<span className="ltr-inline">Self-Balancing Trees</span>)،  ونكتشف كيف تضمن لنا أشجار <span className="ltr-inline">AVL</span> والأشجار الحمراء - السوداء الأداء المثالي دائماً! 
                            </p>
                        </div>

                        {/* References Section */}
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
                                        University of Information Technology and Communications - Data Structures (Source for portions of content)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://enos.itcollege.ee/~japoia/algorithms/GT/Introduction_to_algorithms-3rd%20Edition.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline ltr-inline"
                                    >
                                        Introduction to Algorithms - 3rd Edition (Cormen, Leiserson, Rivest, Stein) (Source for pseudocode and concepts)
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
        </div>
    );
};

const quizData = [
  {
    question: "ما الخاصية الأساسية لشجرة البحث الثنائية؟",
    options: [
      "الجذر يحتوي على أكبر قيمة",
      "كل عقدة لها ثلاثة أبناء",
      "كل القيم في اليسار أصغر، واليمين أكبر من العقدة الحالية",
      "كل القيم متساوية في الفروع"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "ما هو أفضل تعقيد زمني للبحث في BST متوازنة؟",
    options: [
      "O(n)",
      "O(log n)",
      "O(n log(n))",
      "O(1)"
    ],
    correctAnswerIndex: 1
  },
  {
    question: "في عملية الحذف في BST، ما هي الحالة الأكثر تعقيداً؟",
    options: [
      "حذف عقدة لا تملك أبناء",
      "حذف عقدة لها ابن واحد",
      "حذف عقدة لها ابنان",
      "حذف الجذر فقط"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "ما هو Successor لعقدة معينة في BST؟",
    options: [
      "العنصر الذي يسبقها مباشرة",
      "العنصر الذي يليها مباشرة في الترتيب التصاعدي",
      "الجذر",
      "العقدة التي تحتوي على نفس القيمة"
    ],
    correctAnswerIndex: 1
  },
  {
    question: "عند حذف عقدة لها ابنان في BST، يتم استبدالها بـ:",
    options: [
      "الجذر",
      "العقدة اليسرى فقط",
      " اللاحق (Successor)",
      " أقرب ورقة (Leaf node)"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "عندما تكون شجرة BST غير متوازنة (Unbalanced)، فإن أداء البحث يكون:",
    options: [
      "بطيء جدًا مثل قائمة",
      "أسرع دائمًا",
      " أسرع من AVL",
      "يساوي الأداء في Red-Black Tree"
    ],
    correctAnswerIndex: 0
  },
  {
    question: "في عملية الحذف لعقدة لها ابن واحد، ما الإجراء المناسب؟",
    options: [
      " ربط الأب مباشرة بالابن",
      "استبدال العقدة بأقرب Leaf",
      "حذف الجذر فقط",
      " لا يمكن الحذف"
    ],
    correctAnswerIndex: 0
  },
];

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

export default Lecture_2; 