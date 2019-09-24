import * as ProblemAPIUtil from './../util/problem_api_util';


export const RECEIVE_PROBLEM = "RECEIVE_PROBLEM";

export const receiveProblem = problem => ({
    type: RECEIVE_PROBLEM,
    problem
})

export const fetchProblem = id => dispatch => (
    ProblemAPIUtil.getProblem(id)
        .then(problem => dispatch(receiveProblem(problem)))
);