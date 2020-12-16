(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./src/commons/osInfoMapping.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"osMapping\", function() { return osMapping; });\nvar osMapping = [\n    { value: 'Windows 3.11', label: /Win16/ },\n    { value: 'Windows 95', label: /(Windows 95|Win95|Windows_95)/ },\n    { value: 'Windows ME', label: /(Win 9x 4.90|Windows ME)/ },\n    { value: 'Windows 98', label: /(Windows 98|Win98)/ },\n    { value: 'Windows CE', label: /Windows CE/ },\n    { value: 'Windows 2000', label: /(Windows NT 5.0|Windows 2000)/ },\n    { value: 'Windows XP', label: /(Windows NT 5.1|Windows XP)/ },\n    { value: 'Windows Server 2003', label: /Windows NT 5.2/ },\n    { value: 'Windows Vista', label: /Windows NT 6.0/ },\n    { value: 'Windows 7', label: /(Windows 7|Windows NT 6.1)/ },\n    { value: 'Windows 8.1', label: /(Windows 8.1|Windows NT 6.3)/ },\n    { value: 'Windows NT 10.0', label: /(Windows NT 10.0|WinNT10.0|WinNT|Windows NT)/ },\n    { value: 'Windows 8', label: /(Windows 8|Windows NT 6.2)/ },\n    { value: 'Windows NT 4.0', label: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },\n    { value: 'Windows ME', label: /Windows ME/ },\n    { value: 'Android', label: /Android/ },\n    { value: 'Open BSD', label: /OpenBSD/ },\n    { value: 'Sun OS', label: /SunOS/ },\n    { value: 'Linux', label: /(Linux|X11)/ },\n    { value: 'iOS', label: /(iPhone|iPad|iPod)/ },\n    { value: 'Mac OS X', label: /Mac OS X/ },\n    { value: 'Mac OS', label: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },\n    { value: 'QNX', label: /QNX/ },\n    { value: 'UNIX', label: /UNIX/ },\n    { value: 'BeOS', label: /BeOS/ },\n    { value: 'OS/2', label: /OS\\/2/ },\n    {\n        value: 'Search Bot',\n        label: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\\/Teoma|ia_archiver)/,\n    },\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9ucy9vc0luZm9NYXBwaW5nLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbnMvb3NJbmZvTWFwcGluZy50cz8yY2ZhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgb3NNYXBwaW5nID0gW1xuICAgIHsgdmFsdWU6ICdXaW5kb3dzIDMuMTEnLCBsYWJlbDogL1dpbjE2LyB9LFxuICAgIHsgdmFsdWU6ICdXaW5kb3dzIDk1JywgbGFiZWw6IC8oV2luZG93cyA5NXxXaW45NXxXaW5kb3dzXzk1KS8gfSxcbiAgICB7IHZhbHVlOiAnV2luZG93cyBNRScsIGxhYmVsOiAvKFdpbiA5eCA0LjkwfFdpbmRvd3MgTUUpLyB9LFxuICAgIHsgdmFsdWU6ICdXaW5kb3dzIDk4JywgbGFiZWw6IC8oV2luZG93cyA5OHxXaW45OCkvIH0sXG4gICAgeyB2YWx1ZTogJ1dpbmRvd3MgQ0UnLCBsYWJlbDogL1dpbmRvd3MgQ0UvIH0sXG4gICAgeyB2YWx1ZTogJ1dpbmRvd3MgMjAwMCcsIGxhYmVsOiAvKFdpbmRvd3MgTlQgNS4wfFdpbmRvd3MgMjAwMCkvIH0sXG4gICAgeyB2YWx1ZTogJ1dpbmRvd3MgWFAnLCBsYWJlbDogLyhXaW5kb3dzIE5UIDUuMXxXaW5kb3dzIFhQKS8gfSxcbiAgICB7IHZhbHVlOiAnV2luZG93cyBTZXJ2ZXIgMjAwMycsIGxhYmVsOiAvV2luZG93cyBOVCA1LjIvIH0sXG4gICAgeyB2YWx1ZTogJ1dpbmRvd3MgVmlzdGEnLCBsYWJlbDogL1dpbmRvd3MgTlQgNi4wLyB9LFxuICAgIHsgdmFsdWU6ICdXaW5kb3dzIDcnLCBsYWJlbDogLyhXaW5kb3dzIDd8V2luZG93cyBOVCA2LjEpLyB9LFxuICAgIHsgdmFsdWU6ICdXaW5kb3dzIDguMScsIGxhYmVsOiAvKFdpbmRvd3MgOC4xfFdpbmRvd3MgTlQgNi4zKS8gfSxcbiAgICB7IHZhbHVlOiAnV2luZG93cyBOVCAxMC4wJywgbGFiZWw6IC8oV2luZG93cyBOVCAxMC4wfFdpbk5UMTAuMHxXaW5OVHxXaW5kb3dzIE5UKS8gfSxcbiAgICB7IHZhbHVlOiAnV2luZG93cyA4JywgbGFiZWw6IC8oV2luZG93cyA4fFdpbmRvd3MgTlQgNi4yKS8gfSxcbiAgICB7IHZhbHVlOiAnV2luZG93cyBOVCA0LjAnLCBsYWJlbDogLyhXaW5kb3dzIE5UIDQuMHxXaW5OVDQuMHxXaW5OVHxXaW5kb3dzIE5UKS8gfSxcbiAgICB7IHZhbHVlOiAnV2luZG93cyBNRScsIGxhYmVsOiAvV2luZG93cyBNRS8gfSxcbiAgICB7IHZhbHVlOiAnQW5kcm9pZCcsIGxhYmVsOiAvQW5kcm9pZC8gfSxcbiAgICB7IHZhbHVlOiAnT3BlbiBCU0QnLCBsYWJlbDogL09wZW5CU0QvIH0sXG4gICAgeyB2YWx1ZTogJ1N1biBPUycsIGxhYmVsOiAvU3VuT1MvIH0sXG4gICAgeyB2YWx1ZTogJ0xpbnV4JywgbGFiZWw6IC8oTGludXh8WDExKS8gfSxcbiAgICB7IHZhbHVlOiAnaU9TJywgbGFiZWw6IC8oaVBob25lfGlQYWR8aVBvZCkvIH0sXG4gICAgeyB2YWx1ZTogJ01hYyBPUyBYJywgbGFiZWw6IC9NYWMgT1MgWC8gfSxcbiAgICB7IHZhbHVlOiAnTWFjIE9TJywgbGFiZWw6IC8oTWFjUFBDfE1hY0ludGVsfE1hY19Qb3dlclBDfE1hY2ludG9zaCkvIH0sXG4gICAgeyB2YWx1ZTogJ1FOWCcsIGxhYmVsOiAvUU5YLyB9LFxuICAgIHsgdmFsdWU6ICdVTklYJywgbGFiZWw6IC9VTklYLyB9LFxuICAgIHsgdmFsdWU6ICdCZU9TJywgbGFiZWw6IC9CZU9TLyB9LFxuICAgIHsgdmFsdWU6ICdPUy8yJywgbGFiZWw6IC9PU1xcLzIvIH0sXG4gICAge1xuICAgICAgICB2YWx1ZTogJ1NlYXJjaCBCb3QnLFxuICAgICAgICBsYWJlbDogLyhudWhrfEdvb2dsZWJvdHxZYW1teWJvdHxPcGVuYm90fFNsdXJwfE1TTkJvdHxBc2sgSmVldmVzXFwvVGVvbWF8aWFfYXJjaGl2ZXIpLyxcbiAgICB9LFxuXTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/commons/osInfoMapping.ts\n");

/***/ })

}]);