# Simple AWS Lambda Terraform Example
# requires 'index.js' in the same directory
# to test: run `terraform plan`
# to deploy: run `terraform apply`

variable "aws_region" {
  default = "us-east-1"
}
variable "node_runtime" {
  default = "nodejs14.x"
}

provider "aws" {
  region          = "${var.aws_region}"
  shared_credentials_file = "./credentials"
}

data "archive_file" "lambda_1_zip" {
    type          = "zip"
    source_file   = "step-1.js"
    output_path   = "lambda_1_function.zip"
}

resource "aws_lambda_function" "proxy_test_lambda" {
  filename         = "lambda_1_function.zip"
  function_name    = "proxy_test_lambda"
  role             = "${aws_iam_role.iam_for_lambda_tf.arn}"
  handler          = "step-1.handler"
  source_code_hash = "${data.archive_file.lambda_1_zip.output_base64sha256}"
  runtime          = "${var.node_runtime}"
}

data "archive_file" "lambda_2_zip" {
    type          = "zip"
    source_file   = "step-2.js"
    output_path   = "lambda_2_function.zip"
}

resource "aws_lambda_function" "proxy_test_lambda_2" {
  filename         = "lambda_2_function.zip"
  function_name    = "proxy_test_lambda_2"
  role             = "${aws_iam_role.iam_for_lambda_tf.arn}"
  handler          = "step-2.handler"
  source_code_hash = "${data.archive_file.lambda_2_zip.output_base64sha256}"
  runtime          = "${var.node_runtime}"
}

data "archive_file" "lambda_3_zip" {
    type          = "zip"
    source_file   = "step-3.js"
    output_path   = "lambda_3_function.zip"
}

resource "aws_lambda_function" "proxy_test_lambda_3" {
  filename         = "lambda_3_function.zip"
  function_name    = "proxy_test_lambda_3"
  role             = "${aws_iam_role.iam_for_lambda_tf.arn}"
  handler          = "step-3.handler"
  source_code_hash = "${data.archive_file.lambda_3_zip.output_base64sha256}"
  runtime          = "${var.node_runtime}"
}

resource "aws_iam_role" "iam_for_lambda_tf" {
  name = "iam_for_lambda_tf"

  assume_role_policy = jsonencode({
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
         "Service": [
             "lambda.amazonaws.com",
             "states.amazonaws.com"
         ]
      },
      "Effect": "Allow",
      "Sid": ""
    }
    ]
    })
}

########### OUTPUT ###########
output "lamba_step_1" {value = "${aws_lambda_function.proxy_test_lambda.arn}"}
output "lamba_step_2" {value = "${aws_lambda_function.proxy_test_lambda_2.arn}"}
output "lamba_step_3" {value = "${aws_lambda_function.proxy_test_lambda_3.arn}"}