/**
 * Created by dell on 2017/11/2.
 */
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 10 versions','ie>=8','>1% in CN']
        })
    ]
}