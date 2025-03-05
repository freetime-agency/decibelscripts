Skip to main content
Google Workspace
Workspace
Home
Google Sheets
All products

Resources

Search
/

English

Google Sheets
Overview
Guides
Reference
Samples
Support
Filter

Home
Google Workspace
Google Sheets
Reference
Was this helpful?

Send feedbackGoogle Sheets API 

bookmark_border
 
Reads and writes Google Sheets.

Service: sheets.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries. If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

https://sheets.googleapis.com/$discovery/rest?version=v4
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

https://sheets.googleapis.com
REST Resource: v4.spreadsheets
Methods
batchUpdate	POST /v4/spreadsheets/{spreadsheetId}:batchUpdate
Applies one or more updates to the spreadsheet.
create	POST /v4/spreadsheets
Creates a spreadsheet, returning the newly created spreadsheet.
get	GET /v4/spreadsheets/{spreadsheetId}
Returns the spreadsheet at the given ID.
getByDataFilter	POST /v4/spreadsheets/{spreadsheetId}:getByDataFilter
Returns the spreadsheet at the given ID.
REST Resource: v4.spreadsheets.developerMetadata
Methods
get	GET /v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}
Returns the developer metadata with the specified ID.
search	POST /v4/spreadsheets/{spreadsheetId}/developerMetadata:search
Returns all developer metadata matching the specified DataFilter.
REST Resource: v4.spreadsheets.sheets
Methods
copyTo	POST /v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo
Copies a single sheet from a spreadsheet to another spreadsheet.
REST Resource: v4.spreadsheets.values
Methods
append	POST /v4/spreadsheets/{spreadsheetId}/values/{range}:append
Appends values to a spreadsheet.
batchClear	POST /v4/spreadsheets/{spreadsheetId}/values:batchClear
Clears one or more ranges of values from a spreadsheet.
batchClearByDataFilter	POST /v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter
Clears one or more ranges of values from a spreadsheet.
batchGet	GET /v4/spreadsheets/{spreadsheetId}/values:batchGet
Returns one or more ranges of values from a spreadsheet.
batchGetByDataFilter	POST /v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter
Returns one or more ranges of values that match the specified data filters.
batchUpdate	POST /v4/spreadsheets/{spreadsheetId}/values:batchUpdate
Sets values in one or more ranges of a spreadsheet.
batchUpdateByDataFilter	POST /v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter
Sets values in one or more ranges of a spreadsheet.
clear	POST /v4/spreadsheets/{spreadsheetId}/values/{range}:clear
Clears values from a spreadsheet.
get	GET /v4/spreadsheets/{spreadsheetId}/values/{range}
Returns a range of values from a spreadsheet.
update	PUT /v4/spreadsheets/{spreadsheetId}/values/{range}
Sets values in a range of a spreadsheet.
Was this helpful?


Skip to main content
Google Workspace
Workspace
Home
Google Sheets
All products

Resources

Search
/

English

Google Sheets
Overview
Guides
Reference
Samples
Support
Filter

Home
Google Workspace
Google Sheets
Reference
Was this helpful?

Send feedbackREST Resource: spreadsheets 

bookmark_border
 
Resource: Spreadsheet
Resource that represents a spreadsheet.

JSON representation

{
  "spreadsheetId": string,
  "properties": {
    object (SpreadsheetProperties)
  },
  "sheets": [
    {
      object (Sheet)
    }
  ],
  "namedRanges": [
    {
      object (NamedRange)
    }
  ],
  "spreadsheetUrl": string,
  "developerMetadata": [
    {
      object (DeveloperMetadata)
    }
  ],
  "dataSources": [
    {
      object (DataSource)
    }
  ],
  "dataSourceSchedules": [
    {
      object (DataSourceRefreshSchedule)
    }
  ]
}
Fields
spreadsheetId	
string

The ID of the spreadsheet. This field is read-only.

properties	
object (SpreadsheetProperties)

Overall properties of a spreadsheet.

sheets[]	
object (Sheet)

The sheets that are part of a spreadsheet.

namedRanges[]	
object (NamedRange)

The named ranges defined in a spreadsheet.

spreadsheetUrl	
string

The url of the spreadsheet. This field is read-only.

developerMetadata[]	
object (DeveloperMetadata)

The developer metadata associated with a spreadsheet.

dataSources[]	
object (DataSource)

A list of external data sources connected with the spreadsheet.

dataSourceSchedules[]	
object (DataSourceRefreshSchedule)

Output only. A list of data source refresh schedules.

SpreadsheetProperties
Properties of a spreadsheet.

JSON representation
{
  "title": string,
  "locale": string,
  "autoRecalc": enum (RecalculationInterval),
  "timeZone": string,
  "defaultFormat": {
    object (CellFormat)
  },
  "iterativeCalculationSettings": {
    object (IterativeCalculationSettings)
  },
  "spreadsheetTheme": {
    object (SpreadsheetTheme)
  },
  "importFunctionsExternalUrlAccessAllowed": boolean
}
Fields
title	
string

The title of the spreadsheet.

locale	
string

The locale of the spreadsheet in one of the following formats:

an ISO 639-1 language code such as en

an ISO 639-2 language code such as fil, if no 639-1 code exists

a combination of the ISO language code and country code, such as en_US

Note: when updating this field, not all locales/languages are supported.

autoRecalc	
enum (RecalculationInterval)

The amount of time to wait before volatile functions are recalculated.

timeZone	
string

The time zone of the spreadsheet, in CLDR format such as America/New_York. If the time zone isn't recognized, this may be a custom time zone such as GMT-07:00.

defaultFormat	
object (CellFormat)

The default format of all cells in the spreadsheet. CellData.effectiveFormat will not be set if the cell's format is equal to this default format. This field is read-only.

iterativeCalculationSettings	
object (IterativeCalculationSettings)

Determines whether and how circular references are resolved with iterative calculation. Absence of this field means that circular references result in calculation errors.

spreadsheetTheme	
object (SpreadsheetTheme)

Theme applied to the spreadsheet.

importFunctionsExternalUrlAccessAllowed	
boolean

Whether to allow external URL access for image and import functions. Read only when true. When false, you can set to true. This value will be bypassed and always return true if the admin has enabled the allowlisting feature.

RecalculationInterval
An enumeration of the possible recalculation interval options.

Enums
RECALCULATION_INTERVAL_UNSPECIFIED	Default value. This value must not be used.
ON_CHANGE	Volatile functions are updated on every change.
MINUTE	Volatile functions are updated on every change and every minute.
HOUR	Volatile functions are updated on every change and hourly.
IterativeCalculationSettings
Settings to control how circular dependencies are resolved with iterative calculation.

JSON representation
{
  "maxIterations": integer,
  "convergenceThreshold": number
}
Fields
maxIterations	
integer

When iterative calculation is enabled, the maximum number of calculation rounds to perform.

convergenceThreshold	
number

When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop.

SpreadsheetTheme
Represents spreadsheet theme

JSON representation
{
  "primaryFontFamily": string,
  "themeColors": [
    {
      object (ThemeColorPair)
    }
  ]
}
Fields
primaryFontFamily	
string

Name of the primary font family.

themeColors[]	
object (ThemeColorPair)

The spreadsheet theme color pairs. To update you must provide all theme color pairs.

ThemeColorPair
A pair mapping a spreadsheet theme color type to the concrete color it represents.

JSON representation
{
  "colorType": enum (ThemeColorType),
  "color": {
    object (ColorStyle)
  }
}
Fields
colorType	
enum (ThemeColorType)

The type of the spreadsheet theme color.

color	
object (ColorStyle)

The concrete color corresponding to the theme color type.

NamedRange
A named range.

JSON representation
{
  "namedRangeId": string,
  "name": string,
  "range": {
    object (GridRange)
  }
}
Fields
namedRangeId	
string

The ID of the named range.

name	
string

The name of the named range.

range	
object (GridRange)

The range this represents.

DataSource
Information about an external data source in the spreadsheet.

JSON representation
{
  "dataSourceId": string,
  "spec": {
    object (DataSourceSpec)
  },
  "calculatedColumns": [
    {
      object (DataSourceColumn)
    }
  ],
  "sheetId": integer
}
Fields
dataSourceId	
string

The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365.

spec	
object (DataSourceSpec)

The DataSourceSpec for the data source connected with this spreadsheet.

calculatedColumns[]	
object (DataSourceColumn)

All calculated columns in the data source.

sheetId	
integer

The ID of the Sheet connected with the data source. The field cannot be changed once set.

When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated.

DataSourceSpec
This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.

JSON representation
{
  "parameters": [
    {
      object (DataSourceParameter)
    }
  ],

  // Union field spec can be only one of the following:
  "bigQuery": {
    object (BigQueryDataSourceSpec)
  },
  "looker": {
    object (LookerDataSourceSpec)
  }
  // End of list of possible types for union field spec.
}
Fields
parameters[]	
object (DataSourceParameter)

The parameters of the data source, used when querying the data source.

Union field spec. The actual specification per data source type. spec can be only one of the following:
bigQuery	
object (BigQueryDataSourceSpec)

A BigQueryDataSourceSpec.

looker	
object (LookerDataSourceSpec)

A [LookerDatasourceSpec][].

BigQueryDataSourceSpec
The specification of a BigQuery data source that's connected to a sheet.

JSON representation
{
  "projectId": string,

  // Union field spec can be only one of the following:
  "querySpec": {
    object (BigQueryQuerySpec)
  },
  "tableSpec": {
    object (BigQueryTableSpec)
  }
  // End of list of possible types for union field spec.
}
Fields
projectId	
string

The ID of a BigQuery enabled Google Cloud project with a billing account attached. For any queries executed against the data source, the project is charged.

Union field spec. The actual specification. spec can be only one of the following:
querySpec	
object (BigQueryQuerySpec)

A BigQueryQuerySpec.

tableSpec	
object (BigQueryTableSpec)

A BigQueryTableSpec.

BigQueryQuerySpec
Specifies a custom BigQuery query.

JSON representation
{
  "rawQuery": string
}
Fields
rawQuery	
string

The raw query string.

BigQueryTableSpec
Specifies a BigQuery table definition. Only native tables are allowed.

JSON representation
{
  "tableProjectId": string,
  "tableId": string,
  "datasetId": string
}
Fields
tableProjectId	
string

The ID of a BigQuery project the table belongs to. If not specified, the projectId is assumed.

tableId	
string

The BigQuery table id.

datasetId	
string

The BigQuery dataset id.

LookerDataSourceSpec
The specification of a Looker data source.

JSON representation
{
  "instanceUri": string,
  "model": string,
  "explore": string
}
Fields
instanceUri	
string

A Looker instance URL.

model	
string

Name of a Looker model.

explore	
string

Name of a Looker model explore.

DataSourceParameter
A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.

JSON representation
{

  // Union field identifier can be only one of the following:
  "name": string
  // End of list of possible types for union field identifier.

  // Union field value can be only one of the following:
  "namedRangeId": string,
  "range": {
    object (GridRange)
  }
  // End of list of possible types for union field value.
}
Fields
Union field identifier. The parameter identifier. identifier can be only one of the following:
name	
string

Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, BigQuery identifier.

Union field value. The parameter value. value can be only one of the following:
namedRangeId	
string

ID of a NamedRange. Its size must be 1x1.

range	
object (GridRange)

A range that contains the value of the parameter. Its size must be 1x1.

DataSourceRefreshSchedule
Schedule for refreshing the data source.

Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8 AM , the refresh will take place between 8 AM and 12 PM every day.

JSON representation
{
  "enabled": boolean,
  "refreshScope": enum (DataSourceRefreshScope),
  "nextRun": {
    object (Interval)
  },

  // Union field schedule_config can be only one of the following:
  "dailySchedule": {
    object (DataSourceRefreshDailySchedule)
  },
  "weeklySchedule": {
    object (DataSourceRefreshWeeklySchedule)
  },
  "monthlySchedule": {
    object (DataSourceRefreshMonthlySchedule)
  }
  // End of list of possible types for union field schedule_config.
}
Fields
enabled	
boolean

True if the refresh schedule is enabled, or false otherwise.

refreshScope	
enum (DataSourceRefreshScope)

The scope of the refresh. Must be ALL_DATA_SOURCES.

nextRun	
object (Interval)

Output only. The time interval of the next run.

Union field schedule_config. Schedule configurations schedule_config can be only one of the following:
dailySchedule	
object (DataSourceRefreshDailySchedule)

Daily refresh schedule.

weeklySchedule	
object (DataSourceRefreshWeeklySchedule)

Weekly refresh schedule.

monthlySchedule	
object (DataSourceRefreshMonthlySchedule)

Monthly refresh schedule.

DataSourceRefreshScope
The data source refresh scopes.

Enums
DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED	Default value, do not use.
ALL_DATA_SOURCES	Refreshes all data sources and their associated data source objects in the spreadsheet.
DataSourceRefreshDailySchedule
A schedule for data to refresh every day in a given time interval.

JSON representation
{
  "startTime": {
    object (TimeOfDay)
  }
}
Fields
startTime	
object (TimeOfDay)

The start time of a time interval in which a data source refresh is scheduled. Only hours part is used. The time interval size defaults to that in the Sheets editor.

TimeOfDay
Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and google.protobuf.Timestamp.

JSON representation
{
  "hours": integer,
  "minutes": integer,
  "seconds": integer,
  "nanos": integer
}
Fields
hours	
integer

Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.

minutes	
integer

Minutes of hour of day. Must be from 0 to 59.

seconds	
integer

Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

nanos	
integer

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

DataSourceRefreshWeeklySchedule
A weekly schedule for data to refresh on specific days in a given time interval.

JSON representation
{
  "startTime": {
    object (TimeOfDay)
  },
  "daysOfWeek": [
    enum (DayOfWeek)
  ]
}
Fields
startTime	
object (TimeOfDay)

The start time of a time interval in which a data source refresh is scheduled. Only hours part is used. The time interval size defaults to that in the Sheets editor.

daysOfWeek[]	
enum (DayOfWeek)

Days of the week to refresh. At least one day must be specified.

DayOfWeek
Represents a day of the week.

Enums
DAY_OF_WEEK_UNSPECIFIED	The day of the week is unspecified.
MONDAY	Monday
TUESDAY	Tuesday
WEDNESDAY	Wednesday
THURSDAY	Thursday
FRIDAY	Friday
SATURDAY	Saturday
SUNDAY	Sunday
DataSourceRefreshMonthlySchedule
A monthly schedule for data to refresh on specific days in the month in a given time interval.

JSON representation
{
  "startTime": {
    object (TimeOfDay)
  },
  "daysOfMonth": [
    integer
  ]
}
Fields
startTime	
object (TimeOfDay)

The start time of a time interval in which a data source refresh is scheduled. Only hours part is used. The time interval size defaults to that in the Sheets editor.

daysOfMonth[]	
integer

Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At least one day must be specified.

Interval
Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).

The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

JSON representation
{
  "startTime": string,
  "endTime": string
}
Fields
startTime	
string (Timestamp format)

Optional. Inclusive start of the interval.

If specified, a Timestamp matching this interval will have to be the same or after the start.

endTime	
string (Timestamp format)

Optional. Exclusive end of the interval.

If specified, a Timestamp matching this interval will have to be before the end.

Methods
batchUpdate
Applies one or more updates to the spreadsheet.
create
Creates a spreadsheet, returning the newly created spreadsheet.
get
Returns the spreadsheet at the given ID.
getByDataFilter
Returns the spreadsheet at the given ID.
Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2024-09-04 UTC.

BlogBlog
Read the Google Workspace Developers blog
X (Twitter)X (Twitter)
Follow @workspacedevs on X (Twitter)
Code SamplesCode Samples
Explore our sample apps or copy them to build your own
CodelabsCodelabs
Try a guided, hands-on coding experience
VideosVideos
Subscribe to our YouTube channel
Google Workspace for Developers
Platform overview
Developer products
Developer support
Terms of Service
Tools
Admin console
Apps Script Dashboard
Google Cloud console
APIs Explorer
Connect
Blog
Newsletter
X (Twitter)
YouTube
Google Developers
Android
Chrome
Firebase
Google Cloud Platform
Google AI
All products
Terms
Privacy
Sign up for the Google for Developers newsletter
Subscribe

English
The new page has loaded.



Skip to main content
Google Workspace
Workspace
Home
Google Sheets
All products

Resources

Search
/

English

Google Sheets
Overview
Guides
Reference
Samples
Support
Filter

Home
Google Workspace
Google Sheets
Reference
Was this helpful?

Send feedbackSheets 

bookmark_border
 
Sheet 
A sheet in a spreadsheet.

JSON representation

{
  "properties": {
    object (SheetProperties)
  },
  "data": [
    {
      object (GridData)
    }
  ],
  "merges": [
    {
      object (GridRange)
    }
  ],
  "conditionalFormats": [
    {
      object (ConditionalFormatRule)
    }
  ],
  "filterViews": [
    {
      object (FilterView)
    }
  ],
  "protectedRanges": [
    {
      object (ProtectedRange)
    }
  ],
  "basicFilter": {
    object (BasicFilter)
  },
  "charts": [
    {
      object (EmbeddedChart)
    }
  ],
  "bandedRanges": [
    {
      object (BandedRange)
    }
  ],
  "developerMetadata": [
    {
      object (DeveloperMetadata)
    }
  ],
  "rowGroups": [
    {
      object (DimensionGroup)
    }
  ],
  "columnGroups": [
    {
      object (DimensionGroup)
    }
  ],
  "slicers": [
    {
      object (Slicer)
    }
  ]
}
Fields
properties	
object (SheetProperties)

The properties of the sheet.

data[]	
object (GridData)

Data in the grid, if this is a grid sheet.

The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing Sheet1, and the spreadsheet was requested with ranges Sheet1!A1:C10 and Sheet1!D15:E20, then the first GridData will have a startRow / startColumn of 0, while the second one will have startRow 14 (zero-based row 15), and startColumn 3 (zero-based column D).

For a DATA_SOURCE sheet, you can not request a specific range, the GridData contains all the values.

merges[]	
object (GridRange)

The ranges that are merged together.

conditionalFormats[]	
object (ConditionalFormatRule)

The conditional format rules in this sheet.

filterViews[]	
object (FilterView)

The filter views in this sheet.

protectedRanges[]	
object (ProtectedRange)

The protected ranges in this sheet.

basicFilter	
object (BasicFilter)

The filter on this sheet, if any.

charts[]	
object (EmbeddedChart)

The specifications of every chart on this sheet.

bandedRanges[]	
object (BandedRange)

The banded (alternating colors) ranges on this sheet.

developerMetadata[]	
object (DeveloperMetadata)

The developer metadata associated with a sheet.

rowGroups[]	
object (DimensionGroup)

All row groups on this sheet, ordered by increasing range start index, then by group depth.

columnGroups[]	
object (DimensionGroup)

All column groups on this sheet, ordered by increasing range start index, then by group depth.

slicers[]	
object (Slicer)

The slicers on this sheet.

SheetProperties
Properties of a sheet.

JSON representation
{
  "sheetId": integer,
  "title": string,
  "index": integer,
  "sheetType": enum (SheetType),
  "gridProperties": {
    object (GridProperties)
  },
  "hidden": boolean,
  "tabColor": {
    object (Color)
  },
  "tabColorStyle": {
    object (ColorStyle)
  },
  "rightToLeft": boolean,
  "dataSourceSheetProperties": {
    object (DataSourceSheetProperties)
  }
}
Fields
sheetId	
integer

The ID of the sheet. Must be non-negative. This field cannot be changed once set.

title	
string

The name of the sheet.

index	
integer

The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in "before the move" indexes. For example, if there were three sheets (S1, S2, S3) in order to move S1 ahead of S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to the sheets current index or if the requested new index is equal to the current sheet index + 1.

sheetType	
enum (SheetType)

The type of sheet. Defaults to GRID. This field cannot be changed once set.

gridProperties	
object (GridProperties)

Additional properties of the sheet if this sheet is a grid. (If the sheet is an object sheet, containing a chart or image, then this field will be absent.) When writing it is an error to set any grid properties on non-grid sheets.

If this sheet is a DATA_SOURCE sheet, this field is output only but contains the properties that reflect how a data source sheet is rendered in the UI, e.g. rowCount.

hidden	
boolean

True if the sheet is hidden in the UI, false if it's visible.

tabColor
(deprecated)	
object (Color)

This item is deprecated!

The color of the tab in the UI. Deprecated: Use tabColorStyle.

tabColorStyle	
object (ColorStyle)

The color of the tab in the UI. If tabColor is also set, this field takes precedence.

rightToLeft	
boolean

True if the sheet is an RTL sheet instead of an LTR sheet.

dataSourceSheetProperties	
object (DataSourceSheetProperties)

Output only. If present, the field contains DATA_SOURCE sheet specific properties.

SheetType
The kind of sheet.

Enums
SHEET_TYPE_UNSPECIFIED	Default value, do not use.
GRID	The sheet is a grid.
OBJECT	The sheet has no grid and instead has an object like a chart or image.
DATA_SOURCE	The sheet connects with an external DataSource and shows the preview of data.
GridProperties
Properties of a grid.

JSON representation
{
  "rowCount": integer,
  "columnCount": integer,
  "frozenRowCount": integer,
  "frozenColumnCount": integer,
  "hideGridlines": boolean,
  "rowGroupControlAfter": boolean,
  "columnGroupControlAfter": boolean
}
Fields
rowCount	
integer

The number of rows in the grid.

columnCount	
integer

The number of columns in the grid.

frozenRowCount	
integer

The number of rows that are frozen in the grid.

frozenColumnCount	
integer

The number of columns that are frozen in the grid.

hideGridlines	
boolean

True if the grid isn't showing gridlines in the UI.

rowGroupControlAfter	
boolean

True if the row grouping control toggle is shown after the group.

columnGroupControlAfter	
boolean

True if the column grouping control toggle is shown after the group.

DataSourceSheetProperties
Additional properties of a DATA_SOURCE sheet.

JSON representation
{
  "dataSourceId": string,
  "columns": [
    {
      object (DataSourceColumn)
    }
  ],
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
Fields
dataSourceId	
string

ID of the DataSource the sheet is connected to.

columns[]	
object (DataSourceColumn)

The columns displayed on the sheet, corresponding to the values in RowData.

dataExecutionStatus	
object (DataExecutionStatus)

The data execution status.

GridData
Data in the grid, as well as metadata about the dimensions.

JSON representation
{
  "startRow": integer,
  "startColumn": integer,
  "rowData": [
    {
      object (RowData)
    }
  ],
  "rowMetadata": [
    {
      object (DimensionProperties)
    }
  ],
  "columnMetadata": [
    {
      object (DimensionProperties)
    }
  ]
}
Fields
startRow	
integer

The first row this GridData refers to, zero-based.

startColumn	
integer

The first column this GridData refers to, zero-based.

rowData[]	
object (RowData)

The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at startColumn.

rowMetadata[]	
object (DimensionProperties)

Metadata about the requested rows in the grid, starting with the row in startRow.

columnMetadata[]	
object (DimensionProperties)

Metadata about the requested columns in the grid, starting with the column in startColumn.

RowData
Data about each cell in a row.

JSON representation
{
  "values": [
    {
      object (CellData)
    }
  ]
}
Fields
values[]	
object (CellData)

The values in the row, one per column.

DimensionProperties
Properties about a dimension.

JSON representation
{
  "hiddenByFilter": boolean,
  "hiddenByUser": boolean,
  "pixelSize": integer,
  "developerMetadata": [
    {
      object (DeveloperMetadata)
    }
  ],
  "dataSourceColumnReference": {
    object (DataSourceColumnReference)
  }
}
Fields
hiddenByFilter	
boolean

True if this dimension is being filtered. This field is read-only.

hiddenByUser	
boolean

True if this dimension is explicitly hidden.

pixelSize	
integer

The height (if a row) or width (if a column) of the dimension in pixels.

developerMetadata[]	
object (DeveloperMetadata)

The developer metadata associated with a single row or column.

dataSourceColumnReference	
object (DataSourceColumnReference)

Output only. If set, this is a column in a data source sheet.

ConditionalFormatRule
A rule describing a conditional format.

JSON representation
{
  "ranges": [
    {
      object (GridRange)
    }
  ],

  // Union field rule can be only one of the following:
  "booleanRule": {
    object (BooleanRule)
  },
  "gradientRule": {
    object (GradientRule)
  }
  // End of list of possible types for union field rule.
}
Fields
ranges[]	
object (GridRange)

The ranges that are formatted if the condition is true. All the ranges must be on the same grid.

Union field rule. The rule controlling this conditional format, exactly one must be set. rule can be only one of the following:
booleanRule	
object (BooleanRule)

The formatting is either "on" or "off" according to the rule.

gradientRule	
object (GradientRule)

The formatting will vary based on the gradients in the rule.

BooleanRule
A rule that may or may not match, depending on the condition.

JSON representation
{
  "condition": {
    object (BooleanCondition)
  },
  "format": {
    object (CellFormat)
  }
}
Fields
condition	
object (BooleanCondition)

The condition of the rule. If the condition evaluates to true, the format is applied.

format	
object (CellFormat)

The format to apply. Conditional formatting can only apply a subset of formatting: bold, italic, strikethrough, foreground color and, background color.

GradientRule
A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.

JSON representation
{
  "minpoint": {
    object (InterpolationPoint)
  },
  "midpoint": {
    object (InterpolationPoint)
  },
  "maxpoint": {
    object (InterpolationPoint)
  }
}
Fields
minpoint	
object (InterpolationPoint)

The starting interpolation point.

midpoint	
object (InterpolationPoint)

An optional midway interpolation point.

maxpoint	
object (InterpolationPoint)

The final interpolation point.

InterpolationPoint
A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.

JSON representation
{
  "color": {
    object (Color)
  },
  "colorStyle": {
    object (ColorStyle)
  },
  "type": enum (InterpolationPointType),
  "value": string
}
Fields
color
(deprecated)	
object (Color)

This item is deprecated!

The color this interpolation point should use. Deprecated: Use colorStyle.

colorStyle	
object (ColorStyle)

The color this interpolation point should use. If color is also set, this field takes precedence.

type	
enum (InterpolationPointType)

How the value should be interpreted.

value	
string

The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX.

InterpolationPointType
The kind of interpolation point.

Enums
INTERPOLATION_POINT_TYPE_UNSPECIFIED	The default value, do not use.
MIN	The interpolation point uses the minimum value in the cells over the range of the conditional format.
MAX	The interpolation point uses the maximum value in the cells over the range of the conditional format.
NUMBER	The interpolation point uses exactly the value in InterpolationPoint.value.
PERCENT	
The interpolation point is the given percentage over all the cells in the range of the conditional format. This is equivalent to NUMBER if the value was: =(MAX(FLATTEN(range)) * (value / 100)) + (MIN(FLATTEN(range)) * (1 - (value / 100))) (where errors in the range are ignored when flattening).

PERCENTILE	The interpolation point is the given percentile over all the cells in the range of the conditional format. This is equivalent to NUMBER if the value was: =PERCENTILE(FLATTEN(range), value / 100) (where errors in the range are ignored when flattening).
FilterView
A filter view.

JSON representation
{
  "filterViewId": integer,
  "title": string,
  "range": {
    object (GridRange)
  },
  "namedRangeId": string,
  "sortSpecs": [
    {
      object (SortSpec)
    }
  ],
  "criteria": {
    integer: {
      object (FilterCriteria)
    },
    ...
  },
  "filterSpecs": [
    {
      object (FilterSpec)
    }
  ]
}
Fields
filterViewId	
integer

The ID of the filter view.

title	
string

The name of the filter view.

range	
object (GridRange)

The range this filter view covers.

When writing, only one of range or namedRangeId may be set.

namedRangeId	
string

The named range this filter view is backed by, if any.

When writing, only one of range or namedRangeId may be set.

sortSpecs[]	
object (SortSpec)

The sort order per column. Later specifications are used when values are equal in the earlier specifications.

criteria
(deprecated)	
map (key: integer, value: object ( FilterCriteria))

This item is deprecated!

The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column.

This field is deprecated in favor of filterSpecs.

filterSpecs[]	
object (FilterSpec)

The filter criteria for showing/hiding values per column.

Both criteria and filterSpecs are populated in responses. If both fields are specified in an update request, this field takes precedence.

ProtectedRange
A protected range.

JSON representation
{
  "protectedRangeId": integer,
  "range": {
    object (GridRange)
  },
  "namedRangeId": string,
  "description": string,
  "warningOnly": boolean,
  "requestingUserCanEdit": boolean,
  "unprotectedRanges": [
    {
      object (GridRange)
    }
  ],
  "editors": {
    object (Editors)
  }
}
Fields
protectedRangeId	
integer

The ID of the protected range. This field is read-only.

range	
object (GridRange)

The range that is being protected. The range may be fully unbounded, in which case this is considered a protected sheet.

When writing, only one of range or namedRangeId may be set.

namedRangeId	
string

The named range this protected range is backed by, if any.

When writing, only one of range or namedRangeId may be set.

description	
string

The description of this protected range.

warningOnly	
boolean

True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit.

When writing: if this field is true, then editors are ignored. Additionally, if this field is changed from true to false and the editors field is not set (nor included in the field mask), then the editors will be set to all the editors in the document.

requestingUserCanEdit	
boolean

True if the user who requested this protected range can edit the protected area. This field is read-only.

unprotectedRanges[]	
object (GridRange)

The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets.

editors	
object (Editors)

The users and groups with edit access to the protected range. This field is only visible to users with edit access to the protected range and the document. Editors are not supported with warningOnly protection.

Editors
The editors of a protected range.

JSON representation
{
  "users": [
    string
  ],
  "groups": [
    string
  ],
  "domainUsersCanEdit": boolean
}
Fields
users[]	
string

The email addresses of users with edit access to the protected range.

groups[]	
string

The email addresses of groups with edit access to the protected range.

domainUsersCanEdit	
boolean

True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain.

BasicFilter
The default filter associated with a sheet.

JSON representation
{
  "range": {
    object (GridRange)
  },
  "sortSpecs": [
    {
      object (SortSpec)
    }
  ],
  "criteria": {
    integer: {
      object (FilterCriteria)
    },
    ...
  },
  "filterSpecs": [
    {
      object (FilterSpec)
    }
  ]
}
Fields
range	
object (GridRange)

The range the filter covers.

sortSpecs[]	
object (SortSpec)

The sort order per column. Later specifications are used when values are equal in the earlier specifications.

criteria
(deprecated)	
map (key: integer, value: object ( FilterCriteria))

This item is deprecated!

The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column.

This field is deprecated in favor of filterSpecs.

filterSpecs[]	
object (FilterSpec)

The filter criteria per column.

Both criteria and filterSpecs are populated in responses. If both fields are specified in an update request, this field takes precedence.

BandedRange
A banded (alternating colors) range in a sheet.

JSON representation
{
  "bandedRangeId": integer,
  "range": {
    object (GridRange)
  },
  "rowProperties": {
    object (BandingProperties)
  },
  "columnProperties": {
    object (BandingProperties)
  }
}
Fields
bandedRangeId	
integer

The ID of the banded range.

range	
object (GridRange)

The range over which these properties are applied.

rowProperties	
object (BandingProperties)

Properties for row bands. These properties are applied on a row-by-row basis throughout all the rows in the range. At least one of rowProperties or columnProperties must be specified.

columnProperties	
object (BandingProperties)

Properties for column bands. These properties are applied on a column- by-column basis throughout all the columns in the range. At least one of rowProperties or columnProperties must be specified.

BandingProperties
Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules:

headerColor and footerColor take priority over band colors.
firstBandColor takes priority over secondBandColor.
rowProperties takes priority over columnProperties.
For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.

JSON representation
{
  "headerColor": {
    object (Color)
  },
  "headerColorStyle": {
    object (ColorStyle)
  },
  "firstBandColor": {
    object (Color)
  },
  "firstBandColorStyle": {
    object (ColorStyle)
  },
  "secondBandColor": {
    object (Color)
  },
  "secondBandColorStyle": {
    object (ColorStyle)
  },
  "footerColor": {
    object (Color)
  },
  "footerColorStyle": {
    object (ColorStyle)
  }
}
Fields
headerColor
(deprecated)	
object (Color)

This item is deprecated!

The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between firstBandColor and secondBandColor starting from the second row or column. Otherwise, the first row or column is filled with firstBandColor and the colors proceed to alternate as they normally would. Deprecated: Use headerColorStyle.

headerColorStyle	
object (ColorStyle)

The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between firstBandColor and secondBandColor starting from the second row or column. Otherwise, the first row or column is filled with firstBandColor and the colors proceed to alternate as they normally would. If headerColor is also set, this field takes precedence.

firstBandColor
(deprecated)	
object (Color)

This item is deprecated!

The first color that is alternating. (Required) Deprecated: Use firstBandColorStyle.

firstBandColorStyle	
object (ColorStyle)

The first color that is alternating. (Required) If firstBandColor is also set, this field takes precedence.

secondBandColor
(deprecated)	
object (Color)

This item is deprecated!

The second color that is alternating. (Required) Deprecated: Use secondBandColorStyle.

secondBandColorStyle	
object (ColorStyle)

The second color that is alternating. (Required) If secondBandColor is also set, this field takes precedence.

footerColor
(deprecated)	
object (Color)

This item is deprecated!

The color of the last row or column. If this field is not set, the last row or column is filled with either firstBandColor or secondBandColor, depending on the color of the previous row or column. Deprecated: Use footerColorStyle.

footerColorStyle	
object (ColorStyle)

The color of the last row or column. If this field is not set, the last row or column is filled with either firstBandColor or secondBandColor, depending on the color of the previous row or column. If footerColor is also set, this field takes precedence.

DimensionGroup
A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.

JSON representation
{
  "range": {
    object (DimensionRange)
  },
  "depth": integer,
  "collapsed": boolean
}
Fields
range	
object (DimensionRange)

The range over which this group exists.

depth	
integer

The depth of the group, representing how many groups have a range that wholly contains the range of this group.

collapsed	
boolean

This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded.

A true value does not imply that all dimensions within the group are hidden, since a dimension's visibility can change independently from this group property. However, when this property is updated, all dimensions within it are set to hidden if this field is true, or set to visible if this field is false.

Slicer
A slicer in a sheet.

JSON representation
{
  "slicerId": integer,
  "spec": {
    object (SlicerSpec)
  },
  "position": {
    object (EmbeddedObjectPosition)
  }
}
Fields
slicerId	
integer

The ID of the slicer.

spec	
object (SlicerSpec)

The specification of the slicer.

position	
object (EmbeddedObjectPosition)

The position of the slicer. Note that slicer can be positioned only on existing sheet. Also, width and height of slicer can be automatically adjusted to keep it within permitted limits.

SlicerSpec
The specifications of a slicer.

JSON representation
{
  "dataRange": {
    object (GridRange)
  },
  "filterCriteria": {
    object (FilterCriteria)
  },
  "columnIndex": integer,
  "applyToPivotTables": boolean,
  "title": string,
  "textFormat": {
    object (TextFormat)
  },
  "backgroundColor": {
    object (Color)
  },
  "backgroundColorStyle": {
    object (ColorStyle)
  },
  "horizontalAlignment": enum (HorizontalAlign)
}
Fields
dataRange	
object (GridRange)

The data range of the slicer.

filterCriteria	
object (FilterCriteria)

The filtering criteria of the slicer.

columnIndex	
integer

The zero-based column index in the data table on which the filter is applied to.

applyToPivotTables	
boolean

True if the filter should apply to pivot tables. If not set, default to True.

title	
string

The title of the slicer.

textFormat	
object (TextFormat)

The text format of title in the slicer. The link field is not supported.

backgroundColor
(deprecated)	
object (Color)

This item is deprecated!

The background color of the slicer. Deprecated: Use backgroundColorStyle.

backgroundColorStyle	
object (ColorStyle)

The background color of the slicer. If backgroundColor is also set, this field takes precedence.

horizontalAlignment	
enum (HorizontalAlign)

The horizontal alignment of title in the slicer. If unspecified, defaults to LEFT

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2024-09-03 UTC.

BlogBlog
Read the Google Workspace Developers blog
X (Twitter)X (Twitter)
Follow @workspacedevs on X (Twitter)
Code SamplesCode Samples
Explore our sample apps or copy them to build your own
CodelabsCodelabs
Try a guided, hands-on coding experience
VideosVideos
Subscribe to our YouTube channel
Google Workspace for Developers
Platform overview
Developer products
Developer support
Terms of Service
Tools
Admin console
Apps Script Dashboard
Google Cloud console
APIs Explorer
Connect
Blog
Newsletter
X (Twitter)
YouTube
Google Developers
Android
Chrome
Firebase
Google Cloud Platform
Google AI
All products
Terms
Privacy
Sign up for the Google for Developers newsletter
Subscribe

English
The new page has loaded..

Skip to main content
Google Workspace
Workspace
Home
Google Sheets
All products

Resources

Search
/

English

Google Sheets
Overview
Guides
Reference
Samples
Support
Filter

Home
Google Workspace
Google Sheets
Reference
Was this helpful?

Send feedbackCells 

bookmark_border
 
CellData 
Data about a specific cell.

JSON representation

{
  "userEnteredValue": {
    object (ExtendedValue)
  },
  "effectiveValue": {
    object (ExtendedValue)
  },
  "formattedValue": string,
  "userEnteredFormat": {
    object (CellFormat)
  },
  "effectiveFormat": {
    object (CellFormat)
  },
  "hyperlink": string,
  "note": string,
  "textFormatRuns": [
    {
      object (TextFormatRun)
    }
  ],
  "dataValidation": {
    object (DataValidationRule)
  },
  "pivotTable": {
    object (PivotTable)
  },
  "dataSourceTable": {
    object (DataSourceTable)
  },
  "dataSourceFormula": {
    object (DataSourceFormula)
  }
}
Fields
userEnteredValue	
object (ExtendedValue)

The value the user entered in the cell. e.g., 1234, 'Hello', or =NOW() Note: Dates, Times and DateTimes are represented as doubles in serial number format.

effectiveValue	
object (ExtendedValue)

The effective value of the cell. For cells with formulas, this is the calculated value. For cells with literals, this is the same as the userEnteredValue. This field is read-only.

formattedValue	
string

The formatted value of the cell. This is the value as it's shown to the user. This field is read-only.

userEnteredFormat	
object (CellFormat)

The format the user entered for the cell.

When writing, the new format will be merged with the existing format.

effectiveFormat	
object (CellFormat)

The effective format being used by the cell. This includes the results of applying any conditional formatting and, if the cell contains a formula, the computed number format. If the effective format is the default format, effective format will not be written. This field is read-only.

hyperlink	
string

A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a =HYPERLINK formula in the userEnteredValue.formulaValue field. A cell-level link can also be set from the userEnteredFormat.textFormat field. Alternatively, set a hyperlink in the textFormatRun.format.link field that spans the entire cell.

note	
string

Any note on the cell.

textFormatRuns[]	
object (TextFormatRun)

Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed.

When writing, the new runs will overwrite any prior runs. When writing a new userEnteredValue, previous runs are erased.

dataValidation	
object (DataValidationRule)

A data validation rule on the cell, if any.

When writing, the new data validation rule will overwrite any prior rule.

pivotTable	
object (PivotTable)

A pivot table anchored at this cell. The size of pivot table itself is computed dynamically based on its data, grouping, filters, values, etc. Only the top-left cell of the pivot table contains the pivot table definition. The other cells will contain the calculated values of the results of the pivot in their effectiveValue fields.

dataSourceTable	
object (DataSourceTable)

A data source table anchored at this cell. The size of data source table itself is computed dynamically based on its configuration. Only the first cell of the data source table contains the data source table definition. The other cells will contain the display values of the data source table result in their effectiveValue fields.

dataSourceFormula	
object (DataSourceFormula)

Output only. Information about a data source formula on the cell. The field is set if userEnteredValue is a formula referencing some DATA_SOURCE sheet, e.g. =SUM(DataSheet!Column).

CellFormat
The format of a cell.

JSON representation
{
  "numberFormat": {
    object (NumberFormat)
  },
  "backgroundColor": {
    object (Color)
  },
  "backgroundColorStyle": {
    object (ColorStyle)
  },
  "borders": {
    object (Borders)
  },
  "padding": {
    object (Padding)
  },
  "horizontalAlignment": enum (HorizontalAlign),
  "verticalAlignment": enum (VerticalAlign),
  "wrapStrategy": enum (WrapStrategy),
  "textDirection": enum (TextDirection),
  "textFormat": {
    object (TextFormat)
  },
  "hyperlinkDisplayType": enum (HyperlinkDisplayType),
  "textRotation": {
    object (TextRotation)
  }
}
Fields
numberFormat	
object (NumberFormat)

A format describing how number values should be represented to the user.

backgroundColor
(deprecated)	
object (Color)

This item is deprecated!

The background color of the cell. Deprecated: Use backgroundColorStyle.

backgroundColorStyle	
object (ColorStyle)

The background color of the cell. If backgroundColor is also set, this field takes precedence.

borders	
object (Borders)

The borders of the cell.

padding	
object (Padding)

The padding of the cell.

horizontalAlignment	
enum (HorizontalAlign)

The horizontal alignment of the value in the cell.

verticalAlignment	
enum (VerticalAlign)

The vertical alignment of the value in the cell.

wrapStrategy	
enum (WrapStrategy)

The wrap strategy for the value in the cell.

textDirection	
enum (TextDirection)

The direction of the text in the cell.

textFormat	
object (TextFormat)

The format of the text in the cell (unless overridden by a format run). Setting a cell-level link here clears the cell's existing links. Setting the link field in a TextFormatRun takes precedence over the cell-level link.

hyperlinkDisplayType	
enum (HyperlinkDisplayType)

If one exists, how a hyperlink should be displayed in the cell.

textRotation	
object (TextRotation)

The rotation applied to text in the cell.

NumberFormat
The number format of a cell.

JSON representation
{
  "type": enum (NumberFormatType),
  "pattern": string
}
Fields
type	
enum (NumberFormatType)

The type of the number format. When writing, this field must be set.

pattern	
string

Pattern string used for formatting. If not set, a default pattern based on the user's locale will be used if necessary for the given type. See the Date and Number Formats guide for more information about the supported patterns.

NumberFormatType
The number format of the cell. In this documentation the locale is assumed to be en_US, but the actual format depends on the locale of the spreadsheet.

Enums
NUMBER_FORMAT_TYPE_UNSPECIFIED	The number format is not specified and is based on the contents of the cell. Do not explicitly use this.
TEXT	Text formatting, e.g 1000.12
NUMBER	Number formatting, e.g, 1,000.12
PERCENT	Percent formatting, e.g 10.12%
CURRENCY	Currency formatting, e.g $1,000.12
DATE	Date formatting, e.g 9/26/2008
TIME	Time formatting, e.g 3:59:00 PM
DATE_TIME	Date+Time formatting, e.g 9/26/08 15:59:00
SCIENTIFIC	Scientific number formatting, e.g 1.01E+03
Borders
The borders of the cell.

JSON representation
{
  "top": {
    object (Border)
  },
  "bottom": {
    object (Border)
  },
  "left": {
    object (Border)
  },
  "right": {
    object (Border)
  }
}
Fields
top	
object (Border)

The top border of the cell.

bottom	
object (Border)

The bottom border of the cell.

left	
object (Border)

The left border of the cell.

right	
object (Border)

The right border of the cell.

Border
A border along a cell.

JSON representation
{
  "style": enum (Style),
  "width": integer,
  "color": {
    object (Color)
  },
  "colorStyle": {
    object (ColorStyle)
  }
}
Fields
style	
enum (Style)

The style of the border.

width
(deprecated)	
integer

This item is deprecated!

The width of the border, in pixels. Deprecated; the width is determined by the "style" field.

color
(deprecated)	
object (Color)

This item is deprecated!

The color of the border. Deprecated: Use colorStyle.

colorStyle	
object (ColorStyle)

The color of the border. If color is also set, this field takes precedence.

Style
The style of a border.

Enums
STYLE_UNSPECIFIED	The style is not specified. Do not use this.
DOTTED	The border is dotted.
DASHED	The border is dashed.
SOLID	The border is a thin solid line.
SOLID_MEDIUM	The border is a medium solid line.
SOLID_THICK	The border is a thick solid line.
NONE	No border. Used only when updating a border in order to erase it.
DOUBLE	The border is two solid lines.
Padding
The amount of padding around the cell, in pixels. When updating padding, every field must be specified.

JSON representation
{
  "top": integer,
  "right": integer,
  "bottom": integer,
  "left": integer
}
Fields
top	
integer

The top padding of the cell.

right	
integer

The right padding of the cell.

bottom	
integer

The bottom padding of the cell.

left	
integer

The left padding of the cell.

VerticalAlign
The vertical alignment of text in a cell.

Enums
VERTICAL_ALIGN_UNSPECIFIED	The vertical alignment is not specified. Do not use this.
TOP	The text is explicitly aligned to the top of the cell.
MIDDLE	The text is explicitly aligned to the middle of the cell.
BOTTOM	The text is explicitly aligned to the bottom of the cell.
WrapStrategy
How to wrap text in a cell.

Enums
WRAP_STRATEGY_UNSPECIFIED	The default value, do not use.
OVERFLOW_CELL	
Lines that are longer than the cell width will be written in the next cell over, so long as that cell is empty. If the next cell over is non-empty, this behaves the same as CLIP. The text will never wrap to the next line unless the user manually inserts a new line. Example:

| First sentence. |
| Manual newline that is very long. <- Text continues into next cell
| Next newline.   |
LEGACY_WRAP	
This wrap strategy represents the old Google Sheets wrap strategy where words that are longer than a line are clipped rather than broken. This strategy is not supported on all platforms and is being phased out. Example:

| Cell has a |
| loooooooooo| <- Word is clipped.
| word.      |
CLIP	
Lines that are longer than the cell width will be clipped. The text will never wrap to the next line unless the user manually inserts a new line. Example:

| First sentence. |
| Manual newline t| <- Text is clipped
| Next newline.   |
WRAP	
Words that are longer than a line are wrapped at the character level rather than clipped. Example:

| Cell has a |
| loooooooooo| <- Word is broken.
| ong word.  |
TextDirection
The direction of text in a cell.

Enums
TEXT_DIRECTION_UNSPECIFIED	The text direction is not specified. Do not use this.
LEFT_TO_RIGHT	The text direction of left-to-right was set by the user.
RIGHT_TO_LEFT	The text direction of right-to-left was set by the user.
HyperlinkDisplayType
Whether to explicitly render a hyperlink. If not specified, the hyperlink is linked.

Enums
HYPERLINK_DISPLAY_TYPE_UNSPECIFIED	The default value: the hyperlink is rendered. Do not use this.
LINKED	A hyperlink should be explicitly rendered.
PLAIN_TEXT	A hyperlink should not be rendered.
TextRotation
The rotation applied to text in a cell.

JSON representation
{

  // Union field type can be only one of the following:
  "angle": integer,
  "vertical": boolean
  // End of list of possible types for union field type.
}
Fields
Union field type. The type of rotation, vertical or angled. type can be only one of the following:
angle	
integer

The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards.

Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction

vertical	
boolean

If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example:

| V |
| e |
| r |
| t |
| i |
| c |
| a |
| l |
TextFormatRun
A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.

JSON representation
{
  "startIndex": integer,
  "format": {
    object (TextFormat)
  }
}
Fields
startIndex	
integer

The zero-based character index where this run starts, in UTF-16 code units.

format	
object (TextFormat)

The format of this run. Absent values inherit the cell's format.

DataValidationRule
A data validation rule.

JSON representation
{
  "condition": {
    object (BooleanCondition)
  },
  "inputMessage": string,
  "strict": boolean,
  "showCustomUi": boolean
}
Fields
condition	
object (BooleanCondition)

The condition that data in the cell must match.

inputMessage	
string

A message to show the user when adding data to the cell.

strict	
boolean

True if invalid data should be rejected.

showCustomUi	
boolean

True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown.

DataSourceTable
A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.

JSON representation
{
  "dataSourceId": string,
  "columnSelectionType": enum (DataSourceTableColumnSelectionType),
  "columns": [
    {
      object (DataSourceColumnReference)
    }
  ],
  "filterSpecs": [
    {
      object (FilterSpec)
    }
  ],
  "sortSpecs": [
    {
      object (SortSpec)
    }
  ],
  "rowLimit": integer,
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
Fields
dataSourceId	
string

The ID of the data source the data source table is associated with.

columnSelectionType	
enum (DataSourceTableColumnSelectionType)

The type to select columns for the data source table. Defaults to SELECTED.

columns[]	
object (DataSourceColumnReference)

Columns selected for the data source table. The columnSelectionType must be SELECTED.

filterSpecs[]	
object (FilterSpec)

Filter specifications in the data source table.

sortSpecs[]	
object (SortSpec)

Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order.

rowLimit	
integer

The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit.

dataExecutionStatus	
object (DataExecutionStatus)

Output only. The data execution status.

DataSourceTableColumnSelectionType
The data source table column selection types.

Enums
DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED	The default column selection type, do not use.
SELECTED	Select columns specified by columns field.
SYNC_ALL	
Sync all current and future columns in the data source.

If set, the data source table fetches all the columns in the data source at the time of refresh.

DataSourceFormula
A data source formula.

JSON representation
{
  "dataSourceId": string,
  "dataExecutionStatus": {
    object (DataExecutionStatus)
  }
}
Fields
dataSourceId	
string

The ID of the data source the formula is associated with.

dataExecutionStatus	
object (DataExecutionStatus)

Output only. The data execution status.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2024-09-03 UTC.

BlogBlog
Read the Google Workspace Developers blog
X (Twitter)X (Twitter)
Follow @workspacedevs on X (Twitter)
Code SamplesCode Samples
Explore our sample apps or copy them to build your own
CodelabsCodelabs
Try a guided, hands-on coding experience
VideosVideos
Subscribe to our YouTube channel
Google Workspace for Developers
Platform overview
Developer products
Developer support
Terms of Service
Tools
Admin console
Apps Script Dashboard
Google Cloud console
APIs Explorer
Connect
Blog
Newsletter
X (Twitter)
YouTube
Google Developers
Android
Chrome
Firebase
Google Cloud Platform
Google AI
All products
Terms
Privacy
Sign up for the Google for Developers newsletter
Subscribe

English
The new page has loaded.


Skip to main content
Google Workspace
Workspace
Home
Google Sheets
All products

Resources

Search
/

English

Google Sheets
Overview
Guides
Reference
Samples
Support
Filter

Home
Google Workspace
Google Sheets
Reference
Was this helpful?

Send feedbackMethod: spreadsheets.batchUpdate 

bookmark_border
 
Applies one or more updates to the spreadsheet.

Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied.

Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order.

Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.

HTTP request
POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}:batchUpdate

The URL uses gRPC Transcoding syntax.

Path parameters
Parameters
spreadsheetId	
string

The spreadsheet to apply the updates to.

Request body
The request body contains data with the following structure:

JSON representation
{
  "requests": [
    {
      object (Request)
    }
  ],
  "includeSpreadsheetInResponse": boolean,
  "responseRanges": [
    string
  ],
  "responseIncludeGridData": boolean
}
Fields
requests[]	
object (Request)

A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied.

includeSpreadsheetInResponse	
boolean

Determines if the update response should include the spreadsheet resource.

responseRanges[]	
string

Limits the ranges included in the response spreadsheet. Meaningful only if includeSpreadsheetInResponse is 'true'.

responseIncludeGridData	
boolean

True if grid data should be returned. Meaningful only if includeSpreadsheetInResponse is 'true'. This parameter is ignored if a field mask was set in the request.

Response body
The reply for batch updating a spreadsheet.

If successful, the response body contains data with the following structure:

JSON representation
{
  "spreadsheetId": string,
  "replies": [
    {
      object (Response)
    }
  ],
  "updatedSpreadsheet": {
    object (Spreadsheet)
  }
}
Fields
spreadsheetId	
string

The spreadsheet the updates were applied to.

replies[]	
object (Response)

The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.

updatedSpreadsheet	
object (Spreadsheet)

The spreadsheet after updates were applied. This is only set if BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response is true.

Authorization scopes
Requires one of the following OAuth scopes:

https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/drive.file
https://www.googleapis.com/auth/spreadsheets
For more information, see the Authorization guide.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2024-09-03 UTC.

BlogBlog
Read the Google Workspace Developers blog
X (Twitter)X (Twitter)
Follow @workspacedevs on X (Twitter)
Code SamplesCode Samples
Explore our sample apps or copy them to build your own
CodelabsCodelabs
Try a guided, hands-on coding experience
VideosVideos
Subscribe to our YouTube channel
Google Workspace for Developers
Platform overview
Developer products
Developer support
Terms of Service
Tools
Admin console
Apps Script Dashboard
Google Cloud console
APIs Explorer
Connect
Blog
Newsletter
X (Twitter)
YouTube
Google Developers
Android
Chrome
Firebase
Google Cloud Platform
Google AI
All products
Terms
Privacy
Sign up for the Google for Developers newsletter
Subscribe

English
The new page has loaded.


Skip to main content
Google Workspace
Workspace
Home
Google Sheets
All products

Resources

Search
/

English

Google Sheets
Overview
Guides
Reference
Samples
Support
Filter

Home
Google Workspace
Google Sheets
Reference
Was this helpful?

Send feedbackMethod: spreadsheets.getByDataFilter 

bookmark_border
 
Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID.

This method differs from spreadsheets.get in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters.

By default, data within grids is not returned. You can include grid data one of 2 ways:

Specify a field mask listing your desired fields using the fields URL parameter in HTTP

Set the includeGridData parameter to true. If a field mask is set, the includeGridData parameter is ignored

For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.

HTTP request
POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}:getByDataFilter

The URL uses gRPC Transcoding syntax.

Path parameters
Parameters
spreadsheetId	
string

The spreadsheet to request.

Request body
The request body contains data with the following structure:

JSON representation
{
  "dataFilters": [
    {
      object (DataFilter)
    }
  ],
  "includeGridData": boolean
}
Fields
dataFilters[]	
object (DataFilter)

The DataFilters used to select which ranges to retrieve from the spreadsheet.

includeGridData	
boolean

True if grid data should be returned. This parameter is ignored if a field mask was set in the request.

Response body
If successful, the response body contains an instance of Spreadsheet.

Authorization scopes
Requires one of the following OAuth scopes:

https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/drive.file
https://www.googleapis.com/auth/spreadsheets
For more information, see the Authorization guide.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2024-09-04 UTC.

BlogBlog
Read the Google Workspace Developers blog
X (Twitter)X (Twitter)
Follow @workspacedevs on X (Twitter)
Code SamplesCode Samples
Explore our sample apps or copy them to build your own
CodelabsCodelabs
Try a guided, hands-on coding experience
VideosVideos
Subscribe to our YouTube channel
Google Workspace for Developers
Platform overview
Developer products
Developer support
Terms of Service
Tools
Admin console
Apps Script Dashboard
Google Cloud console
APIs Explorer
Connect
Blog
Newsletter
X (Twitter)
YouTube
Google Developers
Android
Chrome
Firebase
Google Cloud Platform
Google AI
All products
Terms
Privacy
Sign up for the Google for Developers newsletter
Subscribe

English
The new page has loaded..


Skip to main content
Google Workspace
Workspace
Home
Google Sheets
All products

Resources

Search
/

English

Google Sheets
Overview
Guides
Reference
Samples
Support
Filter

Home
Google Workspace
Google Sheets
Reference
Was this helpful?

Send feedbackMethod: spreadsheets.get 

bookmark_border
 
Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID.

By default, data within grids is not returned. You can include grid data in one of 2 ways:

Specify a field mask listing your desired fields using the fields URL parameter in HTTP

Set the includeGridData URL parameter to true. If a field mask is set, the includeGridData parameter is ignored

For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.

To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using A1 notation. You can define a single cell (for example, A1) or multiple cells (for example, A1:D5). You can also get cells from other sheets within the same spreadsheet (for example, Sheet2!A1:C4) or retrieve multiple ranges at once (for example, ?ranges=A1:D5&ranges=Sheet2!A1:C4). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.

HTTP request
GET https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}

The URL uses gRPC Transcoding syntax.

Path parameters
Parameters
spreadsheetId	
string

The spreadsheet to request.

Query parameters
Parameters
ranges[]	
string

The ranges to retrieve from the spreadsheet.

includeGridData	
boolean

True if grid data should be returned. This parameter is ignored if a field mask was set in the request.

Request body
The request body must be empty.

Response body
If successful, the response body contains an instance of Spreadsheet.

Authorization scopes
Requires one of the following OAuth scopes:

https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/drive.readonly
https://www.googleapis.com/auth/drive.file
https://www.googleapis.com/auth/spreadsheets
https://www.googleapis.com/auth/spreadsheets.readonly
For more information, see the Authorization guide.

Was this helpful?

Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2024-09-04 UTC.

BlogBlog
Read the Google Workspace Developers blog
X (Twitter)X (Twitter)
Follow @workspacedevs on X (Twitter)
Code SamplesCode Samples
Explore our sample apps or copy them to build your own
CodelabsCodelabs
Try a guided, hands-on coding experience
VideosVideos
Subscribe to our YouTube channel
Google Workspace for Developers
Platform overview
Developer products
Developer support
Terms of Service
Tools
Admin console
Apps Script Dashboard
Google Cloud console
APIs Explorer
Connect
Blog
Newsletter
X (Twitter)
YouTube
Google Developers
Android
Chrome
Firebase
Google Cloud Platform
Google AI
All products
Terms
Privacy
Sign up for the Google for Developers newsletter
Subscribe

English
The new page has loaded.