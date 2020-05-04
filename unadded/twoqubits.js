
twoqubits = {};

twoqubits.TwoQubitSystem = function(k00, k01, k10, k11, posQ1, posQ2) {
    this.k00 = k00;
    this.k01 = k01;
    this.k10 = k10;
    this.k11 = k11;
    this.posQ1 = posQ1;
    this.posQ2 = posQ2;

    if (Math.abs(1 - (k00*k00 + k01*k01 + k10*k10 + k11*k11)) > 0.00001) {
        alert('State is not normalized!');
    }

    this.measureFirstQubit = function () {
        var probability = this.k00*this.k00 + this.k01*this.k01;
        if (Math.random() <= probability) {
            /* We measured |0> */
            var normalize = Math.sqrt(this.k00*this.k00 + this.k01*this.k01);
            this.k10 = 0.0;
            this.k11 = 0.0;
            this.k00 = this.k00 / normalize;
            this.k01 = this.k01 / normalize;
        } else {
            /* We measured |1> */
            var normalize = Math.sqrt(this.k10*this.k10 + this.k11*this.k11);
            this.k00 = 0.0;
            this.k01 = 0.0;
            this.k10 = this.k10 / normalize;
            this.k11 = this.k11 / normalize;
        }
    };

    /* This is obviously not unitary, but it acheives the effect I'm
        going for. There's a stable state if you quickly move your
        mouse over all the qubits, they stay at their collapsed
        values. However, everything is slowly moving towards a bell
        state, so if you wait a while then move your mouse again, it
        will collapse into a different picture. */
    this.decay = function () {
        var decay_factor = 0.01;
        this.k00 += decay_factor;
        this.k11 += decay_factor;
        var normalize = Math.sqrt(this.k00*this.k00 + this.k01*this.k01 + this.k10*this.k10 + this.k11*this.k11);
        this.k00 /= normalize;
        this.k01 /= normalize;
        this.k10 /= normalize;
        this.k11 /= normalize;
    }

    this.measureSecondQubit = function () {
        this.swapQubits();
        this.measureFirstQubit();
        this.swapQubits();
    };

    this.swapQubits = function () {
        var k01 = this.k01;
        var k10 = this.k10;
        this.k01 = k10;
        this.k10 = k01;
    }

    this.getQubit1Shade = function () {
        return Math.floor((this.k00*this.k00 + this.k01*this.k01) * 255);
    }

    this.getQubit2Shade = function () {
        this.swapQubits();
        var shade = this.getQubit1Shade();
        this.swapQubits();
        return shade;
    }
};

