# PostgreSQL Trigger Extractor

## Overview
This project is designed to extract and display all triggers from a PostgreSQL database in their original form. It provides a structured approach to connect to the database, retrieve trigger information, and format the output for easy readability.

## Project Structure
```
postgres-trigger-extractor
├── src
│   ├── db
│   │   ├── connection.js       # Establishes database connection
│   │   └── queries.js          # Contains SQL queries for database interaction
│   ├── extractors
│   │   └── triggerExtractor.js  # Logic to extract triggers from the database
│   ├── index.js                 # Entry point of the application
│   └── utils
│       └── formatter.js         # Utility functions for formatting output
├── sql
│   ├── schema.sql               # SQL statements to create sample tables
│   ├── sample_data.sql          # SQL statements to insert sample data
│   └── triggers.sql             # SQL statements to create triggers
├── package.json                  # npm configuration file
├── .env.example                  # Example environment variables
├── .gitignore                    # Files and directories to ignore by Git
└── README.md                     # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd postgres-trigger-extractor
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Set Up the Database**
   - Create a PostgreSQL database.
   - Run the SQL scripts in the `sql` directory to set up the schema, insert sample data, and create triggers:
     ```bash
     psql -U <username> -d <database_name> -f sql/schema.sql
     psql -U <username> -d <database_name> -f sql/sample_data.sql
     psql -U <username> -d <database_name> -f sql/triggers.sql
     ```

4. **Configure Environment Variables**
   - Copy `.env.example` to `.env` and fill in the required database connection details.

5. **Run the Application**
   ```bash
   node src/index.js
   ```

## Usage
The application will connect to the PostgreSQL database, extract all triggers, and print them in their original SQL form. You can modify the SQL scripts in the `sql` directory to test different scenarios.

## Contributing
Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License
This project is licensed under the MIT License.