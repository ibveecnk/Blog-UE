const fs = require('fs-extra')

async function copyFiles() {
    try {
        await fs.copy('node_modules/foundation-sites/dist/css/foundation.min.css', 'public/stylesheets/foundation.min.css')

        await fs.copy('node_modules/jquery/dist/jquery.min.js', 'public/scripts/jquery.min.js')
        await fs.copy('node_modules/what-input/dist/what-input.min.js', 'public/scripts/what-input.min.js')
        await fs.copy('node_modules/foundation-sites/dist/js/foundation.min.js', 'public/scripts/foundation.min.js')
        await fs.copy('node_modules/motion-ui/dist/motion-ui.min.js', 'public/scripts/motion-ui.min.js')
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
}




copyFiles()