function selectedOption(val) {
    switch(val){
        case 1:
            // border & background
            document.getElementById('one-pair').classList.add('container-selected')
            document.getElementById('two-pair').classList.remove('container-selected')
            document.getElementById('three-pair').classList.remove('container-selected')

            // Fonts
            document.getElementById('one-pair').classList.add('f-metropolis')
            document.getElementById('one-pair').classList.remove('f-inter')
            document.getElementById('two-pair').classList.add('f-inter')
            document.getElementById('two-pair').classList.remove('f-metropolis')
            document.getElementById('three-pair').classList.add('f-inter')
            document.getElementById('three-pair').classList.remove('f-metropolis')

            // size & color
            document.getElementById('one-pair-option').classList.remove('hide')
            document.getElementById('two-pair-option').classList.add('hide')
            document.getElementById('three-pair-option').classList.add('hide')

            // total
            document.getElementById('total').innerHTML = document.getElementById('one-pair-price').innerHTML
            break;
        case 2:
            // border & background
            document.getElementById('one-pair').classList.remove('container-selected')
            document.getElementById('two-pair').classList.add('container-selected')
            document.getElementById('three-pair').classList.remove('container-selected')

            // Fonts
            document.getElementById('one-pair').classList.add('f-inter')
            document.getElementById('one-pair').classList.remove('f-metropolis')
            document.getElementById('two-pair').classList.add('f-metropolis')
            document.getElementById('two-pair').classList.remove('f-inter')
            document.getElementById('three-pair').classList.add('f-inter')
            document.getElementById('three-pair').classList.remove('f-metropolis')

            // size & color
            document.getElementById('one-pair-option').classList.add('hide')
            document.getElementById('two-pair-option').classList.remove('hide')
            document.getElementById('three-pair-option').classList.add('hide')

            // total
            document.getElementById('total').innerHTML = document.getElementById('two-pair-price').innerHTML
            break;
        case 3:            
            // border & background
            document.getElementById('one-pair').classList.remove('container-selected')
            document.getElementById('two-pair').classList.remove('container-selected')
            document.getElementById('three-pair').classList.add('container-selected')

            // Fonts
            document.getElementById('one-pair').classList.add('f-inter')
            document.getElementById('one-pair').classList.remove('f-metropolis')
            document.getElementById('two-pair').classList.add('f-inter')
            document.getElementById('two-pair').classList.remove('f-metropolis')
            document.getElementById('three-pair').classList.add('f-metropolis')
            document.getElementById('three-pair').classList.remove('f-inter')

            // size & color
            document.getElementById('one-pair-option').classList.add('hide')
            document.getElementById('two-pair-option').classList.add('hide')
            document.getElementById('three-pair-option').classList.remove('hide')

            // total
            document.getElementById('total').innerHTML = document.getElementById('three-pair-price').innerHTML
            break;
    }
}