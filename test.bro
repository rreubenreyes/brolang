# Declaring a number
StartingWeight = 45

# Declaring a string
ProgramName = "Squat Every Day"
BackSquat = "Back Squat"
FrontSquat = "Front Squat"

'''
Declaring a function.

There is no block scoping and no explicit return. Function definitions end when a valid expression
declared immediately after the function definition ends. The first expression to complete is always returned.
'''
define BackSquats with (Sets, Reps, StartingWeight) as
  # Declaring an object (dictionary). This is the return value of the function.
  (
    Name: "{Sets}x{Reps} Back Squat", # Curly braces are used within string literals to expand variables.
    Sets: Sets,
    Reps: Reps,
    StartingWeight: StartingWeight
  )

define FrontSquats with (Sets, Reps, StartingWeight) as
  '''
  Calling a function called Exercise from the standard library. This effectively does the same as above.

  Function calls are an identifier surrounded by square brackets. Arguments are passed in as an object.
  '''
  [Exercise] (
    Name: "{Sets}x{Reps} {FrontSquat}"
    Sets: Sets,
    Reps: Reps,
    StartingWeight: StartingWeight
  )

'''
Accessing object values and assigning them to an array. Note that arrays are just objects.

If a key is left out when defining an object, an implicit key is used representing the order in which the value
was passed into the object.
'''
ProgramDays = (Days.Sunday, Days.Monday, Days.Wednesday, Days.Friday)

# Iterating over an array and generating a new array.
WeekOne = repeat
  if Day is Days.Sunday or Day is Days.Wednesday then
    BackSquats(Sets: 5, Reps: 5, StartingWeight: StartingWeight)
  else
    FrontSquats(Sets: 5, Reps: 5, StartingWeight: StartingWeight)
for _, Day of ProgramDays

# The body of the program.
[Program] (
  ProgramName: ProgramName,
  Weeks: (WeekOne)
)

