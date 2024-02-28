#!/usr/bin/env python3.6
# -*- coding: utf-8 -*-
import subprocess
from flask import Flask, request, abort

app = Flask(__name__)


@app.route("/latexApi", methods=["POST"])
def index():
    try:
        docBookCmd = request.values.get("docBookCmd")
        subprocess.run(docBookCmd, shell=True, check=True)
        return "Success"
    except subprocess.CalledProcessError as e:
        error_msg = f"Error executing command: {e}"
        print(error_msg)
        abort(500)
    except Exception as e:
        error_msg = f"An unexpected error occurred: {e}"
        print(error_msg)
        abort(500)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
