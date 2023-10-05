# group-3-project
To do - About

## Coding Notes

To do - Coding Documentation


## Gambling Web Scraping Script

### About
The gambling web scraping script access the [Team Rankings](https://www.teamrankings.com/) website to access statistics associated with historical gambling lines.  Gambling information is available from 2003 to the current 2023 season.  

Three key gambling terms to note before moving on:
* **Record or Straight Up Wins/Losses**: Winner is determined by who has more points at the end of the game
* **Against the Spread (ATS)**: The team beat their opponent by a specified number of points
  - Example: Team A is favored by -3 points over Team B (+3)
  - Team A (-3) must win by more than 3 points to cover the spread
  - Team B (+3) can win the bet by either losing by less than 3 points or by winning the game outright

* **Over/Under**: The combined score of both teams is greater than (over) or less than (under) a number

### Libraries and Dependencies Used
- **[splinter](https://splinter.readthedocs.io/en/latest/)**:
  - *Description*: A web scraping and automation library.
  - *Usage*: Used for web scraping tasks and browser automation.

- **[bs4 (Beautiful Soup)](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)**:
  - *Description*: A library for pulling data out of HTML and XML files.
  - *Usage*: Used for parsing and navigating HTML/XML documents.

- **[pprint (Pretty Print)](https://docs.python.org/3/library/pprint.html)**:
  - *Description*: A module for pretty-printing Python data structures.
  - *Usage*: Useful for formatting and displaying data in a readable way.

- **[pandas](https://pandas.pydata.org/docs/)**:
  - *Description*: A powerful data manipulation and analysis library.
  - *Usage*: Used for data cleaning, transformation, and analysis.

- **[numpy](https://numpy.org/doc/stable/)**:
  - *Description*: A library for numerical operations in Python.
  - *Usage*: Commonly used for scientific computing and numerical data manipulation.

### Coding Notes
The gambling statistics are separated into three scripts.  Each year is tabulated on an individual page and the urls list is used to iterate through all 20 years.  Since year information is located on the HTML page head, years were filled into a new column (thankfully no expansions teams have been introduced to make the series object more difficult).

Common problems with the script include banner ads rendering the page unresponsive and issues with getting Chrome and splinter to work properly.  To mitigate banner ads, a timeout can be added to the script after the tables have been scraped.  Please consult the splinter documentation if you have any questions.


## Gambling Data Cleaning

### About
With the data scraped from [Team Rankings](https://www.teamrankings.com/), the data needs to be cleaned and transformed before loading into the SQLite database.  

### Libraries and Dependencies Used
- **[pandas](https://pandas.pydata.org/docs/)**:
  - *Description*: A powerful data manipulation and analysis library.
  - *Usage*: Used for data cleaning, transformation, and analysis.

- **[numpy](https://numpy.org/doc/stable/)**:
  - *Description*: A library for numerical operations in Python.
  - *Usage*: Commonly used for scientific computing and numerical data manipulation.

- **[matplotlib](https://matplotlib.org/stable/contents.html)**:
  - *Description*: A 2D plotting library for creating static, animated, and interactive visualizations.
  - *Usage*: Used for creating various types of plots and charts.

- **[plotly.express](https://plotly.com/python/plotly-express/)**:
  - *Description*: Part of Plotly, a library for creating interactive and web-based visualizations.
  - *Usage*: Used for creating a wide range of interactive plots and charts.

- **[plotly.graph_objects](https://plotly.com/python/graph-objects/)**:
  - *Description*: Part of Plotly, a library for creating interactive and web-based visualizations.
  - *Usage*: Offers more fine-grained control for creating customized interactive plots.

### Coding Notes
From the web scraping script .csv files generated, a unique identifier is needed to merge the three datasets together based on Team and Year.  Data was imported as strings and will need to be converted to either integers or floating points.  Percent signs were removed from the raw data as part of the data cleaning.  The record information was split apart into columns for wins, losses, and ties, which will be needed in analysis to handle these as lists or arrays for visualization.  Dataset was saved to a .csv file and is ready to load into the SQLite database.

An additional dataset was made that grouped by team for future analysis.

## Sports Data ETL Portion
### About
The Sports Data portion is a Python-based project that demonstrates how to retrieve sports data from the sportsdata.io API and perform ETL (Extract, Transform, Load) operations. This project focuses on collecting data related to various sports events and preparing it for analysis in Jupyter Notebook.

### Data Sources
The project utilizes the sportsdata.io API to access a wide range of sports-related data, including game statistics, player information, and more. The data is available for various sports and spans multiple seasons.

### Libraries and Dependencies Used
To accomplish the tasks within this portion, the following libraries and dependencies are utilized:

Requests: Used for making HTTP requests to the sportsdata.io API.
Pandas: A powerful library for data manipulation and analysis.
Jupyter Notebook: An interactive computing environment for running Python code and creating data-driven documents.
SQLite: A lightweight relational database management system used for storing and querying data.
Project Structure
The project is organized as follows:

Data Extraction: In the project_3_api_notebook.ipynb notebook, you'll find code that demonstrates how to retrieve data from the sportsdata.io API.

Data Transformation: The project_3_api_notebook.ipynb notebook focuses on cleaning, restructuring, and processing the retrieved data.

Data Loading: The project_3_api_notebook.ipynb notebook showcases how to store the transformed data in CSV files and upload it to an SQLite football_db database for analysis and use within html code.
