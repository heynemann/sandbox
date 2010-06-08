-module(fizzbuzz).
-export([start/0]).

start() ->
  calc(1,100).

calc(Number,Max) when Number > Max -> noop;
calc(Number,Max) ->
  io:format("~s~n",[calc(Number)]),
  calc(Number+1,Max).

calc(Number) when Number rem 15 == 0 -> "fizzbuzz";
calc(Number) when Number rem 3 == 0 -> "fizz";
calc(Number) when Number rem 5 == 0 -> "buzz";
calc(Number) -> integer_to_list(Number).
