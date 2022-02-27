webpackJsonp([30],{644:function(t,e,a){var s=a(1)(a(921),a(922),!1,null,null,null);t.exports=s.exports},645:function(t,e,a){var s=a(1)(a(923),a(924),!1,null,null,null);t.exports=s.exports},646:function(t,e,a){var s=a(1)(a(925),a(926),!1,null,null,null);t.exports=s.exports},802:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n={props:["slug","pagination","matches","tournaments"],data:function(){return{parsedSlug:void 0!==this.matches&&this.matches.length?JSON.parse(this.slug):"",parsedPagination:void 0!==this.pagination&&this.pagination.length?JSON.parse(this.pagination):[],parsedMatches:void 0!==this.matches&&this.matches.length?JSON.parse(this.matches):[],parsedTournament:void 0!==this.matches&&this.matches.length?JSON.parse(this.tournaments):[],returnedGroupedFixtures:[],returnedGroupedDates:[],shouldLoad:!1,isMonthPicked:!1,isDayPicked:!1}},created:function(){var t=this;this.returnGroupedFixtures(),this.returnGroupedDates(this.parsedMatches,!0),this.$on("fetchMonthlyFixtures",function(e,a,s){var n=t;n.shouldLoad=!0,n.isMonthPicked=a,n.isDayPicked=s,n.getAsyncDataFromAPI(e,a,s)}),this.$on("paginationIsChanged",function(e){e&&t.returnGroupedDates(e)})},computed:{returnSingleTournament:function(){return window.Vue.helper.getSingleTournamentName(this.parsedSlug,this.sport,this.parsedTournament)}},methods:{returnGroupedFixtures:function(){return this.returnedGroupedFixtures=this.getGroupedFixtures(this.parsedMatches),this.returnedGroupedFixtures},returnGroupedDates:function(t,e){var a=[],n=[];if("object"===(void 0===(a=e?this.getGroupedFixtures(t):Object.assign([],t))?"undefined":s(a)))for(var i=0;i<a.length;i++)n.push(this.$moment(a[i].commonDate).toDate());return this.returnedGroupedDates=Object.assign([],n),this.returnedGroupedDates},getGroupedFixtures:function(t){var e=!(!this.sport||"cricket"!=this.sport);return window.Vue.helper.getGroupedFixtures(t,e)},getAsyncDataFromAPI:function(t,e,a){var s=this,n={date:t,tournament_slug:s.parsedSlug,month_picked:e,day_picked:a};s.fetchMoreFixtures(n,s.sport).then(function(t){t.data&&(s.parsedPagination=t.data.pagination,s.parsedMatches=t.data.matches,s.returnGroupedFixtures(),s.returnGroupedDates(s.parsedMatches,!0),s.shouldLoad=!1)}).catch(function(t){s.shouldLoad=!1,console.log(t)})},fetchMoreFixtures:function(t,e){return axios({method:"get",url:"/api/"+e+"/fixtures",params:t,headers:{Accept:"application/json"}})},firstLetterCaps:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},buildAdUnitName:function(t,e,a){var s=e?e.toLowerCase():"",n=a?a.toLowerCase():"";return s!=n?this.firstLetterCaps(n)+"/"+s+"/"+this.firstLetterCaps(t):this.firstLetterCaps(n)+"/"+this.firstLetterCaps(t)}}}},803:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n={props:["parsedDateArray","parsedTournament","parsedActiveDate","listings"],data:function(){return{currentMonth:this.$moment().format(),state:{value:this.$moment().toDate(),disabled:{to:this.$moment().startOf("d").toDate(),from:null},highlighted:{dates:[]},calender:"glyphicon glyphicon-calendar"},returnedActiveDate:"object"===s(this.parsedActiveDate)&&void 0!==this.parsedActiveDate?this.parsedActiveDate:{},parsedFixture:this.listings,firstDateRange:void 0}},watch:{parsedDateArray:{handler:function(t){if(t){for(var e=[],a=0;a<t.length;a++)0===a&&(this.state.value=this.$moment(t[a]).toDate()),e.push(this.$moment(t[a]).toDate());this.state.highlighted.dates=e}},deep:!0},parsedActiveDate:{handler:function(t){var e=this;this.$nextTick(function(){e.returnedActiveDate=Object.assign({},t)})},deep:!0}},computed:{returnNextTwelveMonths:function(){return this.fetchNextTwelveMonths()},returnCurrent_Month:function(){return this.currentMonth}},methods:{fetchNextTwelveMonths:function(){for(var t=[],e=0;e<12;e++)t.push(this.$moment().startOf("month").add(e,"M").format());return t},fetchDataForSelectedMonth:function(t,e){var a=this;return t?(e?this.$parent.$emit("fetchMonthlyFixtures",a.$moment(t).format("Y-MM-DD"),!0,!1):this.$parent.$emit("fetchMonthlyFixtures",a.$moment(t).format("Y-MM-DD"),!1,!0),a.currentMonth=a.$moment(t).format(),a.currentMonth):a.currentMonth},returnCurrentMonth:function(){var t=this;return t.state.value?(t.currentMonth=t.$moment(t.state.value).format(),t.currentMonth):t.currentMonth},validateDateRange:function(t,e,a){if("string"==typeof t&&"string"==typeof e){var s=this.$moment(t).format("MMMM"),n=this.$moment(e).format("MMMM");return this.firstDateRange=a?t==e?this.$moment(e).format("dddd, D MMM YYYY"):s==n?this.$moment(t).format("D")+" - "+this.$moment(e).format("D MMMM YYYY"):this.$moment(t).format("D MMMM")+" - "+this.$moment(e).format("D MMMM YYYY"):t==e?this.$moment(e).format("dddd, D MMMM YYYY"):s==n?this.$moment(t).format("D")+" - "+this.$moment(e).format("D MMMM YYYY"):this.$moment(t).format("D MMMM")+" - "+this.$moment(e).format("D MMMM YYYY")}console.error("invalid data type for this method")}},mounted:function(){this.returnCurrentMonth();if(this.parsedDateArray){for(var t=[],e=0;e<this.parsedDateArray.length;e++)0===e&&(this.state.value=this.$moment(this.parsedDateArray[e]).utc().toDate()),t.push(this.$moment(this.parsedDateArray[e]).utc().toDate());this.state.highlighted.dates=t}}}},804:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var s={props:["listings","shouldLoad","parsedTournament","slug","pagination","monthPicked","dayPicked"],data:function(){return{paginatedView:this.listings,tournament:this.parsedTournament,paged:this.pagination,isLoadingOnState:this.shouldLoad,parsedMonthIsPicked:!!this.monthPicked&&this.monthPicked,parsedDayIsPicked:!!this.dayPicked&&this.dayPicked,parsedSlug:void 0!==this.matches&&this.matches.length?JSON.parse(this.slug):""}},watch:{listings:function(t){var e=this;this.$nextTick(function(){e.paginatedView=t,e.isLoadingOnState=!1})},shouldLoad:function(t){this.isLoadingOnState=t},monthPicked:function(t){var e=this;this.$nextTick(function(){e.parsedMonthIsPicked=t})},dayPicked:function(t){var e=this;this.$nextTick(function(){e.parsedDayIsPicked=t})},pagination:{handler:function(t){var e=this;this.$nextTick(function(){e.paged=t})},deep:!0}},methods:{paginationIsChanged:function(t){this.$parent.$emit("paginationIsChanged",t)},iconForSport:function(t){return window.Vue.helper.iconForSport(t)},tournamentNames:function(t){return window.Vue.helper.tournamentNames(t)},tournamentLogoForSlug:function(t){return window.Vue.helper.tournamentLogoForSlug(this.sport,t)},teamLogoForTeam:function(t){return window.Vue.helper.teamLogoForTeam(t)},teamLogoLoadOnError:function(t){window.Vue.helper.teamLogoLoadOnError(t)},channelLogoForChannels:function(t){return window.Vue.helper.channelLogoForChannels(t)},constructHref:function(t){return this.slug?this.slug.toLowerCase()===this.sport?window.Vue.helper.getConsturctedHref(this.sport,null,"match",t):window.Vue.helper.getConsturctedHref(this.sport,this.slug,"match",t):window.Vue.helper.getConsturctedHref(this.sport,null,"match",t)},checkMatchStatusForStats:function(t){return-1!==["live","suspended","delayed","postponed","forfeited","cancelled","abandoned","result"].indexOf(t.toLowerCase())},validateDateRange:function(t,e,a){if("string"==typeof t&&"string"==typeof e){var s=this.$moment(t).format("MMMM"),n=this.$moment(e).format("MMMM");return a?t==e?this.$moment(e).format("dddd, D MMM YYYY"):s==n?this.$moment(t).format("D")+" - "+this.$moment(e).format("D MMMM YYYY"):this.$moment(t).format("D MMMM")+" - "+this.$moment(e).format("D MMMM YYYY"):t==e?this.$moment(e).format("dddd, D MMMM YYYY"):s==n?this.$moment(t).format("D")+" - "+this.$moment(e).format("D MMMM YYYY"):this.$moment(t).format("D MMMM")+" - "+this.$moment(e).format("D MMMM YYYY")}console.error("invalid data type for this method")},loadNextFixtures:function(){var t=this;t.isLoadingOnState=!0;var e=!(!t.sport||"cricket"!=t.sport),a={date:t.paged.load_more_date,load_more:t.paged.load_more,tournament_slug:t.slug,month_picked:!1,day_picked:t.parsedDayIsPicked};t.fetchMoreFixtures(a,t.sport).then(function(a){if(a.data){t.paged=Object.assign({},a.data.pagination);var s=a.data.matches,n=window.Vue.helper.getGroupedFixtures(s,e);t.paginatedView=t.paginatedView.concat(n),t.paginationIsChanged(t.paginatedView),t.isLoadingOnState=!1}}).catch(function(e){t.isLoadingOnState=!1,console.log(e)})},fetchMoreFixtures:function(t,e){return axios({method:"get",url:"/api/"+e+"/fixtures",params:t,headers:{Accept:"application/json"}})},firstLetterCaps:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},buildAdUnitName:function(t,e,a){var s=e?e.toLowerCase():"",n=a?a.toLowerCase():"";return s!=n?this.firstLetterCaps(n)+"/"+s+"/"+this.firstLetterCaps(t):this.firstLetterCaps(n)+"/"+this.firstLetterCaps(t)}}}},921:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(802);e.default={mixins:[s.a],data:function(){return{sport:"football"}}}},922:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("football-fixtures-date-filter",{attrs:{parsedDateArray:t.returnedGroupedDates,parsedTournament:t.returnSingleTournament,parsedActiveDate:t.parsedPagination,listing:t.returnedGroupedFixtures[0]}}),t._v(" "),a("football-fixtures-listview-weekly",{attrs:{listings:t.returnedGroupedFixtures,pagination:t.parsedPagination,shouldLoad:t.shouldLoad,parsedTournament:t.returnSingleTournament,slug:t.parsedSlug,monthPicked:t.isMonthPicked,dayPicked:t.isDayPicked}}),t._v(" "),t.returnedGroupedFixtures.length>1?a("div",[a("ad-container",{attrs:{unit:t.parsedSlug?t.sport+t.parsedSlug+"/Fixtures":t.sport+"/Fixtures",size:"bottom_leaderboard",position:"3"}})],1):a("div",[a("ad-container",{staticClass:"is-hidden-mobile",attrs:{unit:t.parsedSlug?t.sport+t.parsedSlug+"/Fixtures":t.sport+"/Fixtures",size:"bottom_leaderboard",position:"3"}}),t._v(" "),a("ad-container",{staticClass:"is-hidden-tablet",attrs:{unit:t.parsedSlug?t.sport+t.parsedSlug+"/Fixtures":t.sport+"/Fixtures",size:"middle_square",position:"1"}})],1)],1)},staticRenderFns:[]}},923:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(803);e.default={mixins:[s.a],data:function(){return{state:{legend:[{description:"Match Days",colorcode:"#e7e8ea"}]},tournament:this.parsedTournament||"Football"}}}},924:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"fixtures-date-filter"}},[a("div",{staticClass:"columns nomargin flex-align-bottom"},[a("div",{staticClass:"column"},[a("h1",{staticClass:"current-week"},[a("span",{staticClass:"sport-title is-capitalized"},[t._v(t._s(t.tournament))]),t._v(" "),a("span",{staticClass:"page-title"},[t._v("Fixtures")])])]),t._v(" "),a("div",{staticClass:"column week-panel"},[a("div",{staticClass:"text-center day"},[t._v(t._s(t._f("moment")(t.parsedDateArray[0],"ddd, D MMM YYYY")))])]),t._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2 col-sm-2 pull-right"},[a("datepicker",{attrs:{value:t.state.value,"input-class":"hidden","calendar-button":!0,"calendar-button-icon":t.state.calender,disabled:t.state.disabled,highlighted:t.state.highlighted,legend:t.state.legend},on:{selected:t.fetchDataForSelectedMonth,"update:value":function(e){t.$set(t.state,"value",e)}}})],1),t._v(" "),a("div",{staticClass:"col-md-7 col-sm-7 pull-right",attrs:{id:"monthPicker"}},[a("div",{staticClass:"dropdown text-right"},[a("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button",id:"menu1","data-toggle":"dropdown"}},[t._v(t._s(t._f("moment")(t.returnedActiveDate.month_name||t.returnCurrent_Month,"MMMM"))+"                                \n                            "),a("span",{staticClass:"arrow down"})]),t._v(" "),a("ul",{staticClass:"dropdown-menu",attrs:{role:"menu","aria-labelledby":"menu1"}},t._l(t.returnNextTwelveMonths,function(e){return a("li",{attrs:{role:"presentation"}},[a("a",{attrs:{role:"menuitem",tabindex:"-1"},on:{click:function(a){a.preventDefault(),t.fetchDataForSelectedMonth(e,!0)}}},[t._v(t._s(t._f("moment")(e,"MMMM Y")))])])}),0)])])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"clearfix"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-right"},[e("span",{staticClass:"font-size-thirteen local-time-notice"},[this._v("All times are shown in your local time.")])])])}]}},925:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(804);e.default={mixins:[s.a],data:function(){return{sport:"football"}}}},926:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"tournament-listview-weekly"}},[t.isLoadingOnState?a("loader"):t._e(),t._v(" "),a("div",{staticClass:"week-panel"},[t.paginatedView.length>0?a("div",{staticClass:"row nomargin remove-mobile-margin"},[a("div",{staticClass:"col-md-12"},t._l(t.paginatedView,function(e,s){return e.groupedFixtures.length>0?a("div",[0!==s?a("div",{staticClass:"text-center day"},[t._v(t._s(t._f("moment")(e.commonDate,"ddd, D MMM YYYY")))]):t._e(),t._v(" "),a("div",{staticClass:"fixture-listview-accordion",attrs:{role:"tablist","aria-multiselectable":"true"}},t._l(e.groupedFixtures,function(e,n){return a("div",{staticClass:"group-listing"},[t.tournament.toLowerCase()===t.sport.toLowerCase()?a("div",{staticClass:"panel-heading",attrs:{"data-parent":"fixture-listview-accordion",role:"tab","data-toggle":"collapse","data-target":["#fixtureCollapse"+s+n],id:["fixtureHeading"+s+n],"aria-controls":["fixtureCollapse"+s+n]}},[a("span",{staticClass:"tournament-row"},[a("span",{staticClass:"tournament-image is-hidden-mobile"},[a("img",{staticClass:"img-responsive",attrs:{alt:e.tournament+" logo",src:t.tournamentLogoForSlug(t.tournamentNames(e.tournament))}})]),t._v(" "),"National First Division"===e.tournament?a("span",{staticClass:"tournament-title"},[t._v("GladAfrica Championship")]):a("span",{staticClass:"tournament-title"},[t._v(t._s(void 0!==e.data[0].tournament?e.data[0].tournament:e.tournament))]),t._v(" "),e.round_name?a("span",{staticClass:"tournament-title",staticStyle:{color:"rgb(181, 179, 184)"}},[t._v("- "+t._s(e.round_name))]):t._e(),t._v(" "),a("span",{staticClass:"acc-arrow"})])]):t._e(),t._v(" "),t.tournament.toLowerCase()!==t.sport.toLowerCase()&&e.round_name?a("div",{staticClass:"panel-heading",attrs:{"data-parent":"fixture-listview-accordion",role:"tab","data-toggle":"collapse","data-target":["#fixtureCollapse"+s+n],id:["fixtureHeading"+s+n],"aria-controls":["fixtureCollapse"+s+n]}},[a("span",{staticClass:"tournament-row"},[a("span",{staticClass:"tournament-title",staticStyle:{color:"rgb(181, 179, 184)"}},[t._v(t._s(e.round_name))]),t._v(" "),a("span",{staticClass:"acc-arrow"})])]):t._e(),t._v(" "),a("div",{staticClass:"panel-collapse collapse in",attrs:{id:["fixtureCollapse"+s+n],role:"tabpanel","aria-labelledby":["fixtureHeading"+s+n]}},[a("ul",{staticClass:"panel-body"},t._l(e.data,function(e){return a("li",{staticClass:"listing-item"},[a("a",{attrs:{href:t.constructHref(e.id)}},[a("div",{staticClass:"is-hidden-mobile"},[a("div",{staticClass:"row columns is-mobile nopaddingTopnBottom"},[a("div",{staticClass:"column is-2 text-left"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column nopaddingVertical text-left venue is-bold",domProps:{textContent:t._s(e.description&&e.description.length>0?e.description:"")}})]),t._v(" "),a("div",{staticClass:"columns nopaddingVertical"},[a("div",{staticClass:"column nopaddingVertical text-left venue",domProps:{textContent:t._s(e.location&&e.location.length>0?e.location:"")}})])]),t._v(" "),a("div",{staticClass:"column is-8 match-up"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"hometeam text-right column is-4"},[e.home_team&&e.home_team.full_name&&e.home_team.full_name.length>0?a("span",{staticClass:"hometeam",domProps:{textContent:t._s(e.home_team.full_name?e.home_team.full_name:"TBA")}}):a("span",{staticClass:"hometeam",domProps:{textContent:t._s(e.home_team&&e.home_team.name?e.home_team.name:"TBA")}})]),t._v(" "),a("div",{staticClass:"column"},[a("img",{staticClass:"text-center",attrs:{alt:e.home_team&&e.home_team.name?e.home_team.name:"TBA Logo",src:t.teamLogoForTeam(e.home_team)},on:{error:function(a){t.teamLogoLoadOnError(e.home_team)}}})]),t._v(" "),a("div",{staticClass:"column match-time"},[t._v(t._s(t._f("moment")(e.starts_at,"H:mm")))]),t._v(" "),a("div",{staticClass:"column"},[a("img",{staticClass:"text-center",attrs:{alt:e.away_team&&e.away_team.name?e.away_team.name:"TBA Logo",src:t.teamLogoForTeam(e.away_team)},on:{error:function(a){t.teamLogoLoadOnError(e.away_team)}}})]),t._v(" "),a("div",{staticClass:"awayteam text-left column is-4"},[e.away_team&&e.away_team.full_name&&e.away_team.full_name.length>0?a("span",{staticClass:"awayteam",domProps:{textContent:t._s(e.away_team.full_name?e.away_team.full_name:"TBA")}}):a("span",{staticClass:"awayteam",domProps:{textContent:t._s(e.away_team&&e.away_team.name?e.away_team.name:"TBA")}})])])]),t._v(" "),e.channels?a("div",{staticClass:"column is-2 channel-logo text-right"},[a("img",{attrs:{src:t.channelLogoForChannels(e.channels)}})]):t._e()]),t._v(" "),t.$shouldDisplayScoresAvailableForFixture(e)||t.$shouldDisplayStatusForFixture(e)?a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-marginless is-paddingless"},[t.$shouldDisplayScoresAvailableForFixture(e)?a("div",{staticClass:"match-description text-center"},[t._v("Result Available at fulltime")]):t.$shouldDisplayStatusForFixture(e)?a("div",{staticClass:"match-description text-center is-capitalized"},[t._v(t._s(t.$shouldConvertStatusIntoFriendlyOnes(e.status)))]):t._e()])]):t._e()]),t._v(" "),a("div",{staticClass:"is-hidden-desktop is-hidden-tablet is-mobile"},[a("div",{staticClass:"component-wrapper"},[a("div",{staticClass:"teams"},[t._m(0,!0),t._v(" "),a("div",{staticClass:"columns is-mobile match-up-details"},[a("div",{staticClass:"column home-team text-center"},[a("div",{staticClass:"team_logo"},[a("img",{staticClass:"text-center",attrs:{alt:e.home_team&&e.home_team.name?e.home_team.name:"TBA Logo",src:t.teamLogoForTeam(e.home_team)},on:{error:function(a){t.teamLogoLoadOnError(e.home_team)}}})]),t._v(" "),a("div",{staticClass:"team-name",domProps:{textContent:t._s(e.home_team&&e.home_team.short_name?e.home_team.short_name:"TBA")}})]),t._v(" "),a("div",{staticClass:"column is-4 text-center"},[a("div",{staticClass:"scoreDisplay columns",staticStyle:{height:"100%"}},[a("div",{staticClass:"column"},[e.starts_at?a("span",{staticClass:"time"},[t._v(t._s(t._f("moment")(e.starts_at,"HH:mm")))]):a("span",{staticClass:"goalsScored"},[t._v("V")])])])]),t._v(" "),a("div",{staticClass:"column away-team text-center"},[a("div",{staticClass:"team_logo"},[a("img",{staticClass:"text-center",attrs:{alt:e.away_team&&e.away_team.name?e.away_team.name:"TBA Logo",src:t.teamLogoForTeam(e.away_team)},on:{error:function(a){t.teamLogoLoadOnError(e.away_team)}}})]),t._v(" "),a("div",{staticClass:"team-name",domProps:{textContent:t._s(e.away_team&&e.away_team.short_name?e.away_team.short_name:"TBA")}})])]),t._v(" "),a("div",{staticClass:"columns is-mobile other-details"},[a("div",{staticClass:"column is-10 text-left"},[a("div",{staticClass:"mobile-text-left match-location ellipse-text"},[e.description?a("span",{domProps:{textContent:t._s(e.description?e.description:"")}}):t._e(),t._v(" "),e.description&&e.description.length>0?a("span",[t._v("at")]):t._e(),t._v(" "),a("span",{staticClass:"venue",domProps:{textContent:t._s(e.location?e.location:"")}})])]),t._v(" "),a("div",{staticClass:"column text-right"},[e.channels?a("div",{staticClass:"channel-logo"},[a("img",{attrs:{src:t.channelLogoForChannels(e.channels)}})]):t._e()])])])])])])])}),0)]),t._v(" "),0===s&&0===n&&t.paginatedView.length>1?a("ad-container",{staticClass:"inbetween-spacing",attrs:{unit:t.sport+"/Fixtures",size:"middle_square",position:"1"}}):t._e()],1)}),0)]):t._e()}),0)]):a("div",{staticClass:"row nomargin"},[t._m(1)]),t._v(" "),a("div",{staticClass:"row nomargin"},[a("div",{staticClass:"col-sm-12 text-center"},[t.paged.load_more?a("a",{staticClass:"view-more-link",on:{click:function(e){e.preventDefault(),t.loadNextFixtures()}}},[t._v("Load More\n                    "),a("span",{staticClass:"glyphicon glyphicon-menu-down",attrs:{"aria-hidden":"true"}})]):t._e()])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-marginless"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"week-panel"},[e("div",{staticClass:"columns nomargin"},[e("div",{staticClass:"column is-12 text-center"},[e("span",{staticClass:"day"},[this._v("No fixtures available")])])])])])}]}}});