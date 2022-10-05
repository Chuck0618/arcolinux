from flask import Flask, render_template, url_for
app =Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/GameDual')
def GameDual():
    return render_template('game_dual.html')

@app.route('/AGCodes')
def AGCodes():
    return render_template('AGCodes.html')
  
@app.route('/Deformation')
def Deformation():
    return render_template('Deformation.html')
# if __name__ == '__main__':
#     app.run()