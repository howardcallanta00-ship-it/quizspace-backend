/**
 * howard-sample.js — A quiz only shown to Howard
 */

module.exports = {
    id: 'howard-data-warehousing',
    title: 'PL/SQL 3',
    desc: 'Data Warehousing and Data Mining.',
    user: 'howard',   // Only shown to Howard

    questions: [
        {
            id: 1,
            text: "What is the primary purpose of a data warehouse system?",
            options: [
                "To provide real-time updates for transactional data",
                "To assist with business intelligence and analytical tasks",
                "To serve as a temporary staging area for raw information",
                "To manage daily employee records and routine activities"
            ],
            correct: 1
        },
        {
            id: 2,
            text: "Which term describes the digital storage of massive amounts of information for an organization?",
            options: [
                "Data Mining",
                "Data Warehousing",
                "Operational Data Store",
                "Online Transaction Processing"
            ],
            correct: 1
        },
        {
            id: 3,
            text: "In the 1960 joint research project between Dartmouth and General Mills, which two foundational terms were established?",
            options: [
                "Rows and Columns",
                "Metadata and Summary data",
                "Dimensions and Facts",
                "Hub and Spoke"
            ],
            correct: 2
        },
        {
            id: 4,
            text: "Which companies are credited with introducing dimensional data marts for the retail sector in 1970?",
            options: [
                "IBM and Tera Data",
                "Nielsen and IRI",
                "General Mills and Dartmouth",
                "Microsoft and Oracle"
            ],
            correct: 1
        },
        {
            id: 5,
            text: "What was the significance of the database management system released by Tera Data Corporation in 1983?",
            options: [
                "It was the first system to use the term 'Business Data Warehouse'",
                "It was specifically created to support decision-making processes",
                "It introduced the concept of 'Sandboxes' for private data exploration",
                "It utilized the first-ever Snowflake Schema for data organization"
            ],
            correct: 1
        },
        {
            id: 6,
            type: 'identification',
            text: "Who is traditionally recognized as the 'father of data warehouse'?",
            answer: ["bill inmon", "inmon bill", "inmon"]
        },
        {
            id: 7,
            text: "Which individuals at IBM were responsible for developing the 'Business Data Warehouse' in the late 1980s?",
            options: [
                "Inmon Bill and Ralph Kimball",
                "Paul Murphy and Barry Devlin",
                "Nielsen and IRI",
                "Dartmouth and General Mills"
            ],
            correct: 1
        },
        {
            id: 8,
            text: "What is the fundamental difference between a standard database and a data warehouse?",
            options: [
                "Databases are for historical analysis, while warehouses are for real-time monitoring",
                "Databases aggregate structured data, while warehouses only store raw metadata",
                "Databases focus on real-time transactional updates, while warehouses aggregate data over time",
                "Databases are used for data mining, while warehouses are used for data extraction"
            ],
            correct: 2
        },
        {
            id: 9,
            text: "In a 'Simple' data warehouse architecture, what three types of information are held in the central repository?",
            options: [
                "ETL tools, Data Sources, and End-user tools",
                "Metadata, summary data, and raw data",
                "Dependent marts, Independent marts, and Hybrid marts",
                "Logic, Transformations, and Client-side data"
            ],
            correct: 1
        },
        {
            id: 10,
            text: "In data warehouse architecture, how does the central repository interact with its environment?",
            options: [
                "It is fed by end users and accessed by data sources",
                "It is fed by data sources and accessed by end users for analysis",
                "It is fed by the Top Tier and accessed by the Bottom Tier",
                "It is fed by OLAP servers and accessed by the staging area"
            ],
            correct: 1
        },
        {
            id: 11,
            text: "Why do some data warehouse architectures include a 'staging area'?",
            options: [
                "To provide a private space for informal data exploration",
                "To allow end users to perform mining before data is stored",
                "To simplify the cleaning and processing of operational data",
                "To act as a permanent archive for denormalized data"
            ],
            correct: 2
        },
        {
            id: 12,
            text: "Which architecture style uses data marts as an intermediary between the central repository and specific business units?",
            options: [
                "Simple with a staging area",
                "Hub and spoke",
                "Galaxy schema",
                "Top-down enterprise"
            ],
            correct: 1
        },
        {
            id: 13,
            text: "What is the function of 'Sandboxes' in a data warehouse environment?",
            options: [
                "To enforce formal protocols and rules on new datasets",
                "To store summary data for the Query Manager",
                "To allow informal exploration of data without following strict warehouse rules",
                "To provide a backup for the Warehouse Manager's records"
            ],
            correct: 2
        },
        {
            id: 14,
            text: "Which layer of the architecture is considered the client-side front end where transformed information is used?",
            options: [
                "Bottom Tier",
                "Middle Tier",
                "Top Tier",
                "Staging Tier"
            ],
            correct: 2
        },
        {
            id: 15,
            text: "What components are primarily found in the Middle Tier of a data warehouse?",
            options: [
                "Data Sources and ETL Tools",
                "OLAP Servers",
                "Client-side Reporting Tools",
                "Data Marts and Sandboxes"
            ],
            correct: 1
        },
        {
            id: 16,
            type: 'identification',
            text: "What does the acronym OLAP stand for?",
            answer: ["online analytical processing", "online analytical processing server"]
        },
        {
            id: 17,
            text: "Which of the following is located in the Bottom Tier of the architecture?",
            options: [
                "OLAP Servers",
                "Client-side front end",
                "Data Sources, ETL Tool, and Data Warehouse",
                "Business analysts and managers"
            ],
            correct: 2
        },
        {
            id: 18,
            text: "Which component is known as the 'front component' and handles the extraction and loading of data?",
            options: [
                "Warehouse Manager",
                "Query Manager",
                "Load Manager",
                "End-user Access Tool"
            ],
            correct: 2
        },
        {
            id: 19,
            text: "Which task is specifically performed by the Load Manager?",
            options: [
                "Creating indexes and views",
                "Scheduling the execution of user queries",
                "Archiving and backing up data",
                "Performing transformations to prepare data for the warehouse"
            ],
            correct: 3
        },
        {
            id: 20,
            text: "Which component is responsible for denormalization, aggregation, and ensuring data consistency within the warehouse?",
            options: [
                "Load Manager",
                "Warehouse Manager",
                "Query Manager",
                "OLAP Server"
            ],
            correct: 1
        },
        {
            id: 21,
            text: "The Query Manager is also referred to by what name?",
            options: [
                "Front component",
                "Backend component",
                "Middle Tier server",
                "Staging area manager"
            ],
            correct: 1
        },
        {
            id: 22,
            text: "What is the primary duty of the Query Manager?",
            options: [
                "Extracting data from external sources",
                "Managing user queries and directing them to appropriate tables",
                "Backing up and archiving the central repository",
                "Designing the logical schema for the database"
            ],
            correct: 1
        },
        {
            id: 23,
            text: "Which type of data warehouse provides a unified, centralized approach for decision support across an entire organization?",
            options: [
                "Operational Data Store",
                "Data Mart",
                "Enterprise Data Warehouse",
                "Independent Data Mart"
            ],
            correct: 2
        },
        {
            id: 24,
            text: "How does an Enterprise Data Warehouse (EDW) typically organize its data?",
            options: [
                "By daily operational timestamp only",
                "By subject, providing access according to those divisions",
                "Using only independent data marts without a central hub",
                "Using only raw, unprocessed metadata"
            ],
            correct: 1
        },
        {
            id: 25,
            text: "What is the primary limitation of an Operational Data Store (ODS)?",
            options: [
                "It cannot be refreshed in real time",
                "It has a very limited view of historical data",
                "It cannot store employee records",
                "It does not support daily business operations"
            ],
            correct: 1
        },
        {
            id: 26,
            type: 'identification',
            text: "What is the other name for Online Transactions Processing Databases?",
            answer: ["oltp", "operational data store"]
        },
        {
            id: 27,
            text: "What is a 'Data Mart'?",
            options: [
                "A centralized repository for an entire corporation",
                "A subset of a data warehouse designed for a specific line of business",
                "A tool used exclusively for archiving historical data",
                "A methodology for shaping data mining projects"
            ],
            correct: 1
        },
        {
            id: 28,
            text: "In which type of data mart is information gathered directly from sources without using a central data warehouse?",
            options: [
                "Dependent Data Mart",
                "Hybrid Data Mart",
                "Independent Data Mart",
                "Enterprise Data Mart"
            ],
            correct: 2
        },
        {
            id: 29,
            text: "A 'Dependent Data Mart' is characterized by which of the following?",
            options: [
                "It collects data directly from operational systems only",
                "It sources the organization's data from a single central Data Warehouse",
                "It is created before the central data warehouse exists",
                "It serves all lines of business equally across the enterprise"
            ],
            correct: 1
        },
        {
            id: 30,
            text: "Which type of data mart can pull information from both data warehouses and operational systems?",
            options: [
                "Dependent",
                "Independent",
                "Hybrid",
                "Galaxy"
            ],
            correct: 2
        },
        {
            id: 31,
            text: "Which of the following is the correct order for the first three steps in implementing a Data Mart?",
            options: [
                "Populating, Accessing, Managing",
                "Designing, Constructing, Populating",
                "Accessing, Managing, Designing",
                "Constructing, Populating, Accessing"
            ],
            correct: 1
        },
        {
            id: 32,
            type: 'identification',
            text: "What term describes the logical description of an entire database?",
            answer: ["schema"]
        },
        {
            id: 33,
            text: "Which schema is considered the simplest and resembles a specific celestial shape?",
            options: [
                "Snowflake Schema",
                "Galaxy Schema",
                "Star Schema",
                "Fact Constellation Schema"
            ],
            correct: 2
        },
        {
            id: 34,
            text: "How does a Snowflake Schema differ from a Star Schema?",
            options: [
                "The Snowflake Schema uses multiple fact tables, while the Star Schema uses one",
                "The Snowflake Schema has normalized dimension tables connected to other dimensions",
                "The Snowflake Schema is simpler and optimized for faster querying",
                "The Snowflake Schema does not use a fact table"
            ],
            correct: 1
        },
        {
            id: 35,
            text: "According to Ralph Kimball, what is a defining characteristic of a Snowflake Schema's dimensions?",
            options: [
                "They are restricted to a single level of hierarchy",
                "They have multiple levels with multiple hierarchies",
                "They must always be denormalized into a single table",
                "They cannot be attached to the Fact Table"
            ],
            correct: 1
        },
        {
            id: 36,
            text: "Which schema is also known as a 'Fact Constellation Schema'?",
            options: [
                "Star Schema",
                "Snowflake Schema",
                "Galaxy Schema",
                "Hub and Spoke Schema"
            ],
            correct: 2
        },
        {
            id: 37,
            text: "What defines a Galaxy Schema?",
            options: [
                "A single dimension table connected to multiple fact tables",
                "Multiple fact tables sharing dimension tables",
                "A single fact table with only one dimension table",
                "A collection of independent data marts with no shared data"
            ],
            correct: 1
        },
        {
            id: 38,
            text: "What information is stored in a 'Fact Table'?",
            options: [
                "Reference information about measurables",
                "Business information or direct facts subjected to analysis",
                "The logical description of the database structure",
                "The history of the data warehouse development"
            ],
            correct: 1
        },
        {
            id: 39,
            text: "What is the role of 'foreign fields' in a Fact Table?",
            options: [
                "To uniquely identify each record in the fact table",
                "To store descriptive attributes like names and addresses",
                "To connect the fact table with dimension tables",
                "To act as the primary key for the entire warehouse"
            ],
            correct: 2
        },
        {
            id: 40,
            text: "How is a 'Dimension Table' uniquely identified?",
            options: [
                "By its connection to the OLAP server",
                "By a primary key column that identifies each record or row",
                "By the number of fact tables it shares in a Galaxy Schema",
                "By the metadata stored in the staging area"
            ],
            correct: 1
        },
        {
            id: 41,
            text: "What is 'Data Mining'?",
            options: [
                "The process of loading data into a central repository",
                "The extraction of vital information or knowledge from large datasets",
                "The cleaning of operational data in a staging area",
                "The creation of a logical schema for a database"
            ],
            correct: 1
        },
        {
            id: 42,
            text: "Which of the following is NOT one of the three scientific disciplines that form the foundation of data mining?",
            options: [
                "Statistics",
                "Artificial Intelligence",
                "Machine Learning",
                "Data Warehousing"
            ],
            correct: 3
        },
        {
            id: 43,
            text: "Which data mining technique is used to identify a user group based on shared features?",
            options: [
                "Regression Analysis",
                "Anomaly Detection",
                "Cluster Analysis",
                "Associative Learning"
            ],
            correct: 2
        },
        {
            id: 44,
            text: "How does 'Classification' differ from 'Cluster Analysis' in the context of labels?",
            options: [
                "Classification deals with labeled items, while Cluster Analysis identifies clusters for unlabeled items",
                "Classification is unsupervised, while Cluster Analysis is supervised",
                "Classification identifies anomalies, while Cluster Analysis identifies relationships",
                "Classification uses statistics, while Cluster Analysis uses machine learning"
            ],
            correct: 0
        },
        {
            id: 45,
            text: "Which technique predicts values based on relationships found within a dataset?",
            options: [
                "Associative Learning",
                "Regression Analysis",
                "Anomaly Detection",
                "Classification"
            ],
            correct: 1
        },
        {
            id: 46,
            text: "What is the purpose of 'Associative Learning' in data mining?",
            options: [
                "To identify things that are noticeably different from a regular pattern",
                "To analyze which things tend to occur together in pairs or groups",
                "To split data into additional tables through normalization",
                "To create a central repository for enterprise-wide data"
            ],
            correct: 1
        },
        {
            id: 47,
            text: "Which type of algorithm requires a 'target' or 'known output' to function?",
            options: [
                "Unsupervised learning",
                "Supervised learning",
                "Association mining",
                "k-Means Clustering"
            ],
            correct: 1
        },
        {
            id: 48,
            text: "Which of the following is an example of an unsupervised learning algorithm?",
            options: [
                "Naïve Bayes",
                "Decision Tree",
                "k-Means Clustering",
                "Support Vector Machines (SVMs)"
            ],
            correct: 2
        },
        {
            id: 49,
            type: 'identification',
            text: "What does the acronym CRISP-DM stand for?",
            answer: ["cross industry standard process for data mining"]
        },
        {
            id: 50,
            text: "How many steps are involved in the CRISP-DM methodology to conceive a project?",
            options: [
                "3",
                "4",
                "5",
                "6"
            ],
            correct: 3
        }
    ]
};