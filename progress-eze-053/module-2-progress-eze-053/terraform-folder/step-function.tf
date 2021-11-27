resource "aws_sfn_state_machine" "main-workflow" {
  name     = "lamba_step_fn"
  role_arn = "${aws_iam_role.iam_for_lambda_tf.arn}"
  definition = <<EOF

{
  "StartAt": "Validate",
  "States": {
    "Validate": {
      "Type": "Task",
      "Resource": "${aws_lambda_function.proxy_test_lambda.arn}",
      "Next": "Process",
      "TimeoutSeconds": 120,
      "Catch" : [{
        "ErrorEquals" : ["States.ALL"],
        "ResultPath": "$.error",
        "Next" : "Exception"
      }]
    },
    "Process": {
      "Type": "Task",
      "Resource": "${aws_lambda_function.proxy_test_lambda_2.arn}",
      "Next": "Succeeded",
      "TimeoutSeconds": 120,
      "Catch" : [{
        "ErrorEquals" : ["States.ALL"],
        "ResultPath": "$.error",
        "Next" : "Exception"
      }]
    },
    "Exception" : {
      "Type": "Task",
      "Resource": "${aws_lambda_function.proxy_test_lambda_3.arn}",
      "ResultPath": "$.error.exception_handled",
      "Next" : "Failed"
    },
    "Succeeded" : {
      "End" : true,
      "Type" : "Pass"
    },
    "Failed": {
      "Type": "Fail"
    }
  }
}

EOF

}

########### OUTPUT ###########
output "step-function-main-workflow" {value = "${aws_sfn_state_machine.main-workflow.name}"}
