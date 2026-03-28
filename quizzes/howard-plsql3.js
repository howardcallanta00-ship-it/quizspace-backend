/**
 * howard-sample.js — A quiz only shown to Howard
 */

module.exports = {
    id: 'howard-machine-learning-review',
    title: 'PL/SQL 4',
    desc: 'Decision Trees, Neural Networks, Data Mining.',
    user: 'howard',   // Only shown to Howard

    questions: [
        {
            id: 1,
            text: "Which diagram is primarily used by individuals to map out a course of action or illustrate statistical probabilities?",
            options: ["Neural Network", "Association Rule", "Decision Tree", "Cluster Analysis"],
            correct: 2
        },
        {
            id: 2,
            text: "Within a decision tree structure, what does an individual node represent?",
            options: ["A final outcome", "A specific feature or attribute", "A reaction to a result", "A subsection of the entire tree"],
            correct: 1
        },
        {
            id: 3,
            text: "In the context of decision tree components, what do the branches signify?",
            options: ["Categorical variables", "Data randomness", "The root population", "Possible decisions or rules"],
            correct: 3
        },
        {
            id: 4,
            text: "Which part of a decision tree represents the end results or final outcomes?",
            options: ["The root node", "The decision node", "The leaf", "The sub-tree"],
            correct: 2
        },
        {
            id: 5,
            text: "What characterizes a Classification Tree?",
            options: ["It deals with continuous data types.", "The decision variable is categorical.", "It represents the entire sample population.", "It is the opposite process of splitting."],
            correct: 1
        },
        {
            id: 6,
            text: "Which type of decision tree is specifically designed for continuous data types?",
            options: ["Regression trees", "Classification trees", "ID3 trees", "Radial Basis trees"],
            correct: 0
        },
        {
            id: 7,
            text: "What is the term for the node that represents the entire population before any division occurs?",
            options: ["Terminal Node", "Parent Node", "Root Node", "Child Node"],
            correct: 2
        },
        {
            id: 8,
            type: 'identification',
            text: "What is the formal name for the process of partitioning a single node into multiple sub-nodes?",
            answer: ["splitting"]
        },
        {
            id: 9,
            text: "When a sub-node is further divided into additional sub-nodes, it is specifically referred to as a:",
            options: ["Leaf node", "Root node", "Terminal node", "Decision node"],
            correct: 3
        },
        {
            id: 10,
            text: "What defines a Leaf or Terminal node in a decision tree?",
            options: ["It is the point where the most information gain occurs.", "It is a node that does not undergo further splitting.", "It is a node that contains the n+1 neuron.", "It is the primary node that represents the whole sample."],
            correct: 1
        },
        {
            id: 11,
            text: "Which process involves the removal of sub-nodes from a decision node to simplify the tree?",
            options: ["Pruning", "Clustering", "Feed-Forward", "Ditching"],
            correct: 0
        },
        {
            id: 12,
            text: "How is a 'branch' or 'sub-tree' defined in relation to the main tree?",
            options: ["It is the farthest point representing an outcome.", "It is a subsection of the entire tree structure.", "It is the process of selecting the best attribute.", "It is the total number of categorical variables."],
            correct: 1
        },
        {
            id: 13,
            text: "In a relationship where one node is divided into sub-nodes, the original node is the _______ and the sub-nodes are the _______.",
            options: ["Leaf; Branches", "Root; Terminals", "Parent; Children", "Feature; Attributes"],
            correct: 2
        },
        {
            id: 14,
            type: 'identification',
            text: "What does the acronym ID3 stand for in machine learning?",
            answer: ["iterative dichotomiser 3"]
        },
        {
            id: 15,
            text: "Who is credited with developing the ID3 algorithm?",
            options: ["Thomas Bayes", "Robert Hecht-Nielsen", "J. Ross Quinlan", "Shannon Entropy"],
            correct: 2
        },
        {
            id: 16,
            text: "What is the primary function of the ID3 algorithm?",
            options: ["Performing cluster analysis on large databases.", "Calculating the distance of data points from a center.", "Building decision trees for classification problems.", "Managing the computation speed of modular networks."],
            correct: 2
        },
        {
            id: 17,
            text: "Which 'greedy' approach does the ID3 algorithm use to select the best attribute for a split?",
            options: ["Minimum Support", "Maximum Information Gain", "Maximum Radial Basis", "Minimum Confidence"],
            correct: 1
        },
        {
            id: 18,
            text: "What does 'Entropy' (Shannon Entropy), denoted as H(S), specifically measure in a dataset?",
            options: ["The probability of a person buying Item B.", "The number of neurons in a hidden layer.", "The amount of uncertainty or randomness.", "The distance between the parent and child nodes."],
            correct: 2
        },
        {
            id: 19,
            type: 'identification',
            text: "What metric tells us how much uncertainty was reduced after splitting a set on an attribute?",
            answer: ["information gain", "ig"]
        },
        {
            id: 20,
            text: "Which algorithm is described as a probabilistic technique based on Bayes' Theorem?",
            options: ["K-means", "Naive Bayes", "Multilayer Perceptron", "Apriori"],
            correct: 1
        },
        {
            id: 21,
            text: "Why is the Naive Bayes classifier specifically described as 'naive'?",
            options: ["It cannot handle continuous data types.", "It assumes that all features in a dataset are independent.", "It only works on very small datasets.", "It does not require a training phase."],
            correct: 1
        },
        {
            id: 22,
            text: "Thomas Bayes, the namesake of Bayes' Theorem, was of what profession?",
            options: ["Computer scientist", "Statistician", "Mathematician", "Developer"],
            correct: 1
        },
        {
            id: 23,
            text: "How did Dr. Robert Hecht-Nielsen define a neural network (ANN)?",
            options: ["A diagram used to determine a course of action.", "A computing system of interconnected processing elements.", "A family of algorithms designed to form groups.", "A set of rules for learning correlations in databases."],
            correct: 1
        },
        {
            id: 24,
            text: "Through which layer are patterns first presented to a neural network?",
            options: ["Hidden Layer", "Output Layer", "Input Layer", "Convolutional Layer"],
            correct: 2
        },
        {
            id: 25,
            text: "In addition to the standard features, what is added to the input layer of a neural network?",
            options: ["A child node", "A bias", "A frequent itemset", "An association rule"],
            correct: 1
        },
        {
            id: 26,
            text: "If a neural network is processing a dataset with 12 features, how many neurons will the input layer contain?",
            options: ["11", "12", "13", "24"],
            correct: 2
        },
        {
            id: 27,
            text: "What is a neural network called if it contains more than one hidden layer?",
            options: ["Feed-Forward network", "Deep neural network", "Radial Basis network", "Binary classification network"],
            correct: 1
        },
        {
            id: 28,
            text: "A neural network designed for binary classification will have how many neurons in its output layer?",
            options: ["One", "Two", "Three", "Four"],
            correct: 0
        },
        {
            id: 29,
            text: "Which characteristic is unique to a Feed-Forward neural network?",
            options: ["It uses back feedback to improve nodes.", "The motion of the network is only forward.", "It has a high self-learning mechanism.", "It is only used for text-to-speech conversion."],
            correct: 1
        },
        {
            id: 30,
            text: "What is the main intuition behind a Radial Basis Function (RBF) neural network?",
            options: ["The use of association rules.", "The distance of data points relative to the center.", "The independence of all input predictors.", "The recursion of output back into the input."],
            correct: 1
        },
        {
            id: 31,
            text: "In which scenario is a Multilayer Perceptron specifically recommended?",
            options: ["When data is linearly separable.", "When the data is not linearly separable.", "When calculating absolute support.", "When only one neuron is needed in the output."],
            correct: 1
        },
        {
            id: 32,
            text: "What distinguishes a Convolutional Neural Network (CNN)?",
            options: ["It lacks an output layer.", "It uses a filtering mechanism that enables activation.", "It moves only in a forward motion without processing.", "It assumes all features are independent."],
            correct: 1
        },
        {
            id: 33,
            text: "In a Recurrent Neural Network (RNN), what happens to the output of a particular layer?",
            options: ["It is pruned to reduce uncertainty.", "It is discarded once it reaches the output node.", "It is saved and put back into the input.", "It is used to determine the radial basis."],
            correct: 2
        },
        {
            id: 34,
            text: "Which type of neural network is widely used for text-to-speech conversion?",
            options: ["Modular", "Feed-Forward", "Recurrent", "Convolutional"],
            correct: 2
        },
        {
            id: 35,
            text: "What is the primary benefit of a Modular Neural Network?",
            options: ["It allows for better back feedback.", "It increases computation speed by processing individual components.", "It reduces the number of neurons needed.", "It handles categorical data only."],
            correct: 1
        },
        {
            id: 36,
            text: "What is the primary objective of the K-means algorithm?",
            options: ["To predict classes based on probability.", "To create k groups where members are more similar.", "To learn association rules.", "To filter features."],
            correct: 1
        },
        {
            id: 37,
            type: 'identification',
            text: "In the field of cluster analysis, what term is synonymous with 'clusters'?",
            answer: ["groups"]
        },
        {
            id: 38,
            text: "What does the Apriori algorithm learn?",
            options: ["Floor plans", "Association rules", "Shannon Entropy", "Splitting nodes"],
            correct: 1
        },
        {
            id: 39,
            text: "When is an itemset considered 'frequent' in Apriori?",
            options: ["When it contains n+1 items.", "When its support is no less than the minimum support threshold.", "When confidence is 100%.", "When processed by a hidden layer."],
            correct: 1
        },
        {
            id: 40,
            text: "What is 'confidence' in the context of association rules?",
            options: ["The entropy of a variable.", "The probability that if a person buys item A, they will also buy item B.", "The number of hidden layers.", "The process of removing sub-nodes."],
            correct: 1
        }
    ]
};