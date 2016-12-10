var app = angular.module("demo", ['mp.deepBlur']);

app.controller("calendarDemo", function ($scope) {
    $scope.day = moment().locale('uk');
});

app.directive("calendar", function () {
    return {
        restrict: "E",
        templateUrl: "templates/calendar.html",
        scope: {
            selected: "="
        },
        link: function (scope) {
            scope.selected = _removeTime(scope.selected || moment());
            scope.selectedItem = 0;
            scope.month = scope.selected.clone();
            scope.times = [];
            scope.selectedTime = "";
            scope.comment = "";
            scope.selectedDateAndTime = "";

            var start = scope.selected.clone();
            start.date(7);

            _removeTime(start.day(0));

            _buildMonth(scope, start, scope.month);

            scope.select = function (day) {
                scope.selected = day.date;
                scope.selectedItem = day;
                scope.times = day.times;
                scope.selectedTime = "";
                scope.comment = "";
            };

            scope.next = function () {
                var next = scope.month.clone();
                _removeTime(next.month(next.month() + 1).date(7));
                scope.month.month(scope.month.month() + 1);
                _buildMonth(scope, next, scope.month);
            };

            scope.previous = function () {
                var previous = scope.month.clone();
                _removeTime(previous.month(previous.month() - 1).date(7));
                scope.month.month(scope.month.month() - 1);
                _buildMonth(scope, previous, scope.month);
            };

            scope.addEvent = function (selected) {
                var event = {
                        time: scope.selectedTime,
                        comment: scope.comment
                    },
                    selectedTimeIndex = selected.times.indexOf(scope.selectedTime);

                selected.times[selectedTimeIndex].selected = true;
                selected.times[selectedTimeIndex].comment = scope.comment;
                selected.events.push(event);

                scope.selectedTime = "";
                scope.selectedDateAndTime = "";
                scope.comment = "";
            };

            scope.selectTime = function (time) {
                if (time.selected !== true) {
                    scope.selectedTime = time;
                    scope.selectedDateAndTime = scope.selected.format('Do MMMM') + ' ' + time.value;
                } else {
                    alert("На цей час вже хтось записаний");
                }
            };
        }
    };

    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false,
            date = start.clone().isoWeekday(1),
            monthIndex = date.month(),
            count = 0;

        while (!done) {
            scope.weeks.push({days: _buildWeek(date.clone(), month)});
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date,
                times: [
                    {
                        value: "8:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "9:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "10:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "11:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "12:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "13:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "14:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "15:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "16:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "17:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "18:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "19:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "20:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "21:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "22:00",
                        selected: false,
                        comment: ""
                    },
                    {
                        value: "23:00",
                        selected: false,
                        comment: ""
                    }
                ],
                events: []
            });
            date = date.clone();
            date.add(1, "d");
        }
        //console.log(days);
        return days;
    }
});