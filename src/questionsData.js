const questionsData = [
    {id:0, question:'Did you employ W-2 employees in 2020 or 2021?', answer:['Yes', 'No']},
    {id:1, question:'Was your business revenue impacted by a government-mandated slowdown or shutdown in 2020 or 2021 or by a supplier or partner’s shutdown?',
     answer:['Yes', 'No']},
    {id:2, question:'Did your business experience a year-over-year revenue decrease during any quarter of 2020 or 2021?',
     answer:['Yes', 'No']},
    {id:3, question:'When did you start your business?',
      type: 'date'},
    {id:4, question:'How many W-2 employees did you employ on average in 2020?',
      type: 'number', placeholder:'Average number of 2020 employees'},
    {id:5, question:'How many W-2 employees did you employ on average in 2021?',
      type: 'number', placeholder:'Average number of 2021 employees'},
]
export default questionsData