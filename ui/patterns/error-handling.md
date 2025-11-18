## Enhanced 404 Page with Bug Reporting

**Pattern:** Error Recovery with User Feedback

**Implementation:**
- Custom 404 page (`src/pages/NotFound.tsx`)
- ReportBugModal component for bug submission
- useBugReports hook for API integration

**Features:**
- Displays attempted route to user
- "Return Home" quick action
- "Report Bug" button opens modal
- Bug reports stored in `message_reports` table with reason: `bug_report_404`

**Data Captured:**
- Attempted route
- User intent/description
- Additional context (URL, user agent, timestamp)
