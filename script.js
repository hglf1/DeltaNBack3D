this.cellBtn = document.getElementById('cellBtn');
this.colorBtn = document.getElementById('colorBtn')
this.charBtn = document.getElementById('charBtn')
this.sizeBtn = document.getElementById('sizeBtn')
this.rotationBtn = document.getElementById('rotationBtn')
this.positionBtn = document.getElementById('positionBtn')
this.charcBtn = document.getElementById('charcBtn')
this.wordBtn = document.getElementById('wordBtn')
this.wsizeBtn = document.getElementById('wsizeBtn')

this.echar = document.getElementById('echar')
this.esize = document.getElementById('esize')
this.eccolor = document.getElementById('eccolor')
this.erotation = document.getElementById('erotation')
this.eword = document.getElementById('eword')
this.ewsize = document.getElementById('ewsize')
this.eall = document.getElementById('eall')

this.dme = document.getElementById('dme')

this.lre = document.getElementById('lr')
this.lrse = document.getElementById('lrs')
this.lrie = document.getElementById('lri')
this.lrdde = document.getElementById('lrdd')
this.lrne = document.getElementById('lrn')
this.lrde = document.getElementById('lrd')
this.rae = document.getElementById('ra')
this.rase = document.getElementById('ras')
this.raie = document.getElementById('rai')
this.rane = document.getElementById('ran')
this.rade = document.getElementById('rad')
this.rbe = document.getElementById('rb')
this.rbse = document.getElementById('rbs')
this.rbie = document.getElementById('rbi')
this.rbne = document.getElementById('rbn')
this.rbde = document.getElementById('rbd')
this.rce = document.getElementById('rc')
this.rcse = document.getElementById('rcs')
this.rcie = document.getElementById('rci')
this.rcne = document.getElementById('rcn')
this.rcde = document.getElementById('rcd')
this.rde = document.getElementById('rd')
this.rdse = document.getElementById('rds')
this.rdie = document.getElementById('rdi')
this.rdne = document.getElementById('rdn')
this.rdde = document.getElementById('rdd')
this.ree = document.getElementById('re')
this.rese = document.getElementById('res')
this.reie = document.getElementById('rei')
this.rene = document.getElementById('ren')
this.rede = document.getElementById('red')
this.radde = document.getElementById('radd')
this.rbdde = document.getElementById('rbdd')
this.rcdde = document.getElementById('rcdd')
this.rddde = document.getElementById('rddd')
this.redde = document.getElementById('redd')

const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const settingsButton = document.getElementById('settingsButton');
const historyButton = document.getElementById('historyButton')
const closeSettingsButton = document.getElementById('closeSettingsButton');
const closeHistoryButton = document.getElementById('closeHistoryButton')
const settingsMenu = document.getElementById('settingsMenu');
const delayIntervale = document.getElementById('delayIntervalc')
const Nvalueinput = document.getElementById('Nvalueinput')

const sc = document.getElementById('sc')
const ic = document.getElementById('ic')
const ac = document.getElementById('ac')

this.charBtn.disabled = true
this.charcBtn.disabled = true
this.rotationBtn.disabled = true
this.sizeBtn.disabled = true
this.positionBtn.disabled = true
this.wordBtn.disabled = true
this.wsizeBtn.disabled = true

this.PositionHistory = [];
this.CellHistory = [];
this.ColorHistory = [];
this.CharHistory = [];
this.SizeHistory = [];
this.RotationHistory = [];
this.CharcHistory = [];
this.WordHistory = [];
this.WsizeHistory = [];

this.AccuracyHistory = [];

this.delayInterval = 2000
let N = 1
this.mistakes = 0
this.correct = 0
this.stimulic = 0
this.msc = 0
this.mat = 0
this.ama = 0
this.sah = [0, 0, 0, 0, 0, 0];
this.ssh = [0, 0, 0, 0, 0, 0];
this.sih = [0, 0, 0, 0, 0, 0];
this.snh = [0, 0, 0, 0, 0, 0];
this.sdh = [0, 0, 0, 0, 0, 0];
this.sddh = ['-', '-', '-', '-', '-', '-'];

let cellBtnnp = true
let colorBtnnp = true
let charBtnnp = true
let sizeBtnnp = true
let rotationBtnnp = true
let positionBtnnp = true
let charcBtnnp = true
let wordBtnnp = true
let wsizeBtnnp = true
let wsizeBtnp = false
let wordBtnp = false
let charcBtnp = false
let cellBtnp = false
let colorBtnp = false
let charBtnp = false
let sizeBtnp = false
let rotationBtnp = false
let positionBtnp = false

this.cellBtn.addEventListener('click', () => { 
cellBtnnp = false
cellBtnp = true
if (this.difmode !== true) {
this.checkCell();
}
if (this.difmode) {
    this.checkCelld();
}
});
this.colorBtn.addEventListener('click', () => { 
colorBtnnp = false
colorBtnp = true
if (this.difmode !== true) {
this.checkColor();
}
if (this.difmode) {
    this.checkColord();
}
    });
this.charBtn.addEventListener('click', () => { 
charBtnnp = false
charBtnp = true
if (this.difmode !== true) {
this.checkChar();
}
if (this.difmode) {
    this.checkChard();
}
});
this.sizeBtn.addEventListener('click', () => { 
sizeBtnnp = false
sizeBtnp = true
if (this.difmode !== true) {
this.checkSize();
}
if (this.difmode) {
    this.checkSized();
}
    });
this.rotationBtn.addEventListener('click', () => { 
rotationBtnnp = false
rotationBtnp = true
if (this.difmode !== true) {
this.checkRotation();
}
if (this.difmode) {
    this.checkRotationd()
}
});
this.positionBtn.addEventListener('click', () => { 
positionBtnnp = false
positionBtnp = true
if (this.difmode !== true) {
this.checkPosition();
}
if (this.difmode) {
    this.checkPositiond();
}
    });
this.charcBtn.addEventListener('click', () => { 
charcBtnnp = false
charcBtnp = true
if (this.difmode !== true) {
this.checkCharc();
}
if (this.difmode) {
    this.checkCharcd();
}
});
this.wordBtn.addEventListener('click', () => { 
wordBtnnp = false
wordBtnp = true
if (this.difmode !== true) {
this.checkWord();
}
if (this.difmode) {
    this.checkWordd();
}
});
this.wsizeBtn.addEventListener('click', () => { 
wsizeBtnnp = false
wsizeBtnp = true
if (this.difmode !== true) {
this.checkWsize();
}
if (this.difmode) {
    this.checkWsized();
}
});

settingsButton.addEventListener('click', () => {
    settingsMenu.classList.toggle('open');
});
historyButton.addEventListener('click', () => {
    historyMenu.classList.toggle('open')
})
closeSettingsButton.addEventListener('click', () => {
    settingsMenu.classList.remove('open');
});
closeHistoryButton.addEventListener('click', () => { 
    historyMenu.classList.remove('open')
})
delayIntervale.addEventListener('change', (e) => {
    this.delayInterval = e.target.value;
});
Nvalueinput.addEventListener('change', (e) => {
    N = e.target.value;
});
this.echar.addEventListener('click', () => {
    this.chare = true
    this.echar.style.backgroundColor = '#090'
    this.charBtn.disabled = false
    this.positionBtn.disabled = false
})
this.esize.addEventListener('click', () => {
    this.sizee = true
    this.esize.style.backgroundColor = '#090'
    this.sizeBtn.disabled = false
})
this.eccolor.addEventListener('click', () => {
    this.ccolore = true
    this.eccolor.style.backgroundColor = '#090'
    this.charcBtn.disabled = false
})
this.erotation.addEventListener('click', () => {
    this.rotatione = true
    this.erotation.style.backgroundColor = '#090'
    this.rotationBtn.disabled = false
})
this.eword.addEventListener('click', () => {
    this.worde = true
    this.eword.style.backgroundColor = '#090'
    this.wordBtn.disabled = false
})
this.ewsize.addEventListener('click', () => {
    this.wsizee = true
    this.ewsize.style.backgroundColor = '#090'
    this.wsizeBtn.disabled = false
})
this.eall.addEventListener('click', () => {
    this.wsizee = true
    this.ewsize.style.backgroundColor = '#090'
    this.wsizeBtn.disabled = false
    this.worde = true
    this.eword.style.backgroundColor = '#090'
    this.wordBtn.disabled = false
    this.rotatione = true
    this.erotation.style.backgroundColor = '#090'
    this.rotationBtn.disabled = false
    this.ccolore = true
    this.eccolor.style.backgroundColor = '#090'
    this.charcBtn.disabled = false
    this.sizee = true
    this.esize.style.backgroundColor = '#090'
    this.sizeBtn.disabled = false
    this.chare = true
    this.echar.style.backgroundColor = '#090'
    this.charBtn.disabled = false
    this.positionBtn.disabled = false
    this.eall.style.backgroundColor = '#090'
})
this.dme.addEventListener('click', () => {
    this.difmode = true
    this.dme.style.backgroundColor = '#090'
})
let intervalId;  // Store the interval ID here

startBtn.addEventListener('click', () => {
    this.run = true;
    this.fa = localStorage.getItem('fa')
    this.fs = localStorage.getItem('fs')
    this.fi = localStorage.getItem('fi')
    this.fn = localStorage.getItem('fn')
    this.fd = localStorage.getItem('fd')
    this.ea = localStorage.getItem('ea')
    this.es = localStorage.getItem('es')
    this.ei = localStorage.getItem('ei')
    this.en = localStorage.getItem('en')
    this.ed = localStorage.getItem('ed')
    this.da = localStorage.getItem('da')
    this.ds = localStorage.getItem('ds')
    this.di = localStorage.getItem('di')
    this.dn = localStorage.getItem('dn')
    this.dd = localStorage.getItem('dd')
    this.ca = localStorage.getItem('ca')
    this.cs = localStorage.getItem('cs')
    this.ci = localStorage.getItem('ci')
    this.cn = localStorage.getItem('cn')
    this.cd = localStorage.getItem('cd')
    this.ba = localStorage.getItem('ba')
    this.bs = localStorage.getItem('bs')
    this.bi = localStorage.getItem('bi')
    this.bn = localStorage.getItem('bn')
    this.bd = localStorage.getItem('bd')
    this.aa = localStorage.getItem('aa')
    this.as = localStorage.getItem('as')
    this.ai = localStorage.getItem('ai')
    this.an = localStorage.getItem('an')
    this.ad = localStorage.getItem('ad')
    this.add = localStorage.getItem('add')
    this.bdd = localStorage.getItem('bdd')
    this.cdd = localStorage.getItem('cdd')
    this.ddd = localStorage.getItem('ddd')
    this.edd = localStorage.getItem('edd')
    this.fdd = localStorage.getItem('fdd')
    this.sah.push(this.fa)
    this.sah.push(this.ea)
    this.sah.push(this.da)
    this.sah.push(this.ca)
    this.sah.push(this.ba)
    this.sah.push(this.aa)
    this.ssh.push(this.fs)
    this.ssh.push(this.es)
    this.ssh.push(this.ds)
    this.ssh.push(this.cs)
    this.ssh.push(this.bs)
    this.ssh.push(this.as)
    this.sih.push(this.fi)
    this.sih.push(this.ei)
    this.sih.push(this.di)
    this.sih.push(this.ci)
    this.sih.push(this.bi)
    this.sih.push(this.ai)
    this.snh.push(this.fn)
    this.snh.push(this.en)
    this.snh.push(this.dn)
    this.snh.push(this.cn)
    this.snh.push(this.bn)
    this.snh.push(this.an)
    this.sdh.push(this.fd)
    this.sdh.push(this.ed)
    this.sdh.push(this.dd)
    this.sdh.push(this.cd)
    this.sdh.push(this.bd)
    this.sdh.push(this.ad)
    this.sddh.push(this.fdd)
    this.sddh.push(this.edd)
    this.sddh.push(this.ddd)
    this.sddh.push(this.cdd)
    this.sddh.push(this.bdd)
    this.sddh.push(this.add)
    this.ree.textContent = 'avg acc: ' + this.fa
    this.rese.textContent = 'Stimuli: ' + this.fs
    this.reie.textContent = 'Iterations: ' + this.fi
    this.redde.textContent = 'Dimensions: ' + this.fdd
    this.rene.textContent = 'N: ' + this.fn
    this.rede.textContent = 'Interval: ' + this.fd
    this.rde.textContent = 'avg acc: ' + this.ea
    this.rdse.textContent = 'Stimuli: ' + this.es
    this.rdie.textContent = 'Iterations: ' + this.ei
    this.rddde.textContent = 'Dimensions: ' + this.edd
    this.rdne.textContent = 'N: ' + this.en
    this.rdde.textContent = 'Interval: ' + this.ed
    this.rce.textContent = 'avg acc: ' + this.da 
    this.rcse.textContent = 'Stimuli: ' + this.ds
    this.rcie.textContent = 'Iterations: ' + this.di
    this.rcdde.textContent = 'Dimensions: ' + this.ddd
    this.rcne.textContent = 'N: ' + this.dn
    this.rcde.textContent = 'Interval: ' + this.dd
    this.rbe.textContent = 'avg acc: ' + this.ca
    this.rbse.textContent = 'Stimuli: ' + this.cs
    this.rbie.textContent = 'Iterations: ' + this.ci
    this.rbdde.textContent = 'Dimensions: ' + this.cdd
    this.rbne.textContent = 'N: ' + this.cn
    this.rbde.textContent = 'Interval: ' + this.cd
    this.rae.textContent = 'avg acc: ' + this.ba
    this.rase.textContent = 'Stimuli: ' + this.bs
    this.raie.textContent = 'Iterations: ' + this.bi
    this.radde.textContent = 'Dimensions: ' + this.bdd
    this.rane.textContent = 'N: ' + this.bn
    this.rade.textContent = 'Interval: ' + this.bd
    this.lre.textContent = 'avg acc: ' + this.aa
    this.lrse.textContent = 'Stimuli: ' + this.as
    this.lrie.textContent = 'Iterations: ' + this.ai
    this.lrdde.textContent = 'Dimensions: ' + this.add
    this.lrne.textContent = 'N: ' + this.an
    this.lrde.textContent = 'Interval: ' + this.ad
    this.nd = 2
if (this.chare) {
    this.nd = this.nd + 2
}
if (this.sizee && this.chare) {
    this.nd++
}
if (this.ccolore && this.chare) {
    this.nd++
}
if (this.rotatione && this.chare) {
    this.nd++
}
if (this.worde) {
    this.nd++
}
if (this.wsizee && this.worde) {
    this.nd++
}
if (this.nd === 2) {
    this.dt = 'Dual'
    this.maxstim = 10
}
if (this.nd === 3) {
    this.dt = 'Tri'
    this.maxstim = 8
}
if (this.nd === 4) {
    this.dt = 'Quad'
    this.maxstim = 6
}
if (this.nd === 5) {
    this.dt = 'Penta'
    this.maxstim = 5
}
if (this.nd === 6) {
    this.dt = 'Hexa'
    this.maxstim = 4
}
if (this.nd === 7) {
    this.dt = 'Septa'
    this.maxstim = 3
}
if (this.nd === 8) {
    this.dt = 'Octa'
    this.maxstim = 2
}
if (this.nd === 9) {
    this.dt = 'Nona'
    this.maxstim = 2
}
    
    if (!intervalId) {  // Only start a new interval if one isn't running
        intervalId = setInterval(() => {
            if (this.run) {
                generateStimuli();  // Run the stimuli generation
            }
        }, this.delayInterval);  // Use the delay interval set by the user
    }
});

stopBtn.addEventListener('click', () => {
    this.run = false;
    this.san = this.ama
    this.si = this.msc / N
    this.sah.push(this.san)
    this.ssh.push(this.msc)
    this.sih.push(this.si)
    this.snh.push(N)
    this.sddh.push(this.dt)
    this.sdh.push(this.delayInterval)
    this.msc = 0
    this.ama = 0
    this.lre.textContent = 'avg acc: ' + this.sah[this.sah.length - 1] + '%'
    this.lrse.textContent = 'Stimuli: ' + this.ssh[this.ssh.length - 1]
    this.lrie.textContent = 'Iterations: ' + this.sih[this.sih.length - 1]
    this.lrdde.textContent = 'Dimensions: ' + this.sddh[this.sddh.length - 1]
    this.lrne.textContent = 'N: ' + this.snh[this.snh.length - 1]
    this.lrde.textContent = 'Interval: ' + this.sdh[this.sdh.length - 1]
    this.rae.textContent = 'avg acc: ' + this.sah[this.sah.length - 2] + '%'
    this.rase.textContent = 'Stimuli: ' + this.ssh[this.ssh.length - 2]
    this.raie.textContent = 'Iterations: ' + this.sih[this.sih.length - 2]
    this.radde.textContent = 'Dimensions: ' + this.sddh[this.sddh.length - 2]
    this.rane.textContent = 'N: ' + this.snh[this.snh.length - 2]
    this.rade.textContent = 'Interval: ' + this.sdh[this.sdh.length - 2]
    this.rbe.textContent = 'avg acc: ' + this.sah[this.sah.length - 3] + '%'
    this.rbse.textContent = 'Stimuli: ' + this.ssh[this.ssh.length - 3]
    this.rbie.textContent = 'Iterations: ' + this.sih[this.sih.length - 3]
    this.rbdde.textContent = 'Dimensions: ' + this.sddh[this.sddh.length - 3]
    this.rbne.textContent = 'N: ' + this.snh[this.snh.length - 3]
    this.rbde.textContent = 'Interval: ' + this.sdh[this.sdh.length - 3]
    this.rce.textContent = 'avg acc: ' + this.sah[this.sah.length - 4] + '%'
    this.rcse.textContent = 'Stimuli: ' + this.ssh[this.ssh.length - 4]
    this.rcie.textContent = 'Iterations: ' + this.sih[this.sih.length - 4]
    this.rcdde.textContent = 'Dimensions: ' + this.sddh[this.sddh.length - 4]
    this.rcne.textContent = 'N: ' + this.snh[this.snh.length - 4]
    this.rcde.textContent = 'Interval: ' + this.sdh[this.sdh.length - 4]
    this.rde.textContent = 'avg acc: ' + this.sah[this.sah.length - 5] + '%'
    this.rdse.textContent = 'Stimuli: ' + this.ssh[this.ssh.length - 5]
    this.rdie.textContent = 'Iterations: ' + this.sih[this.sih.length - 5]
    this.rddde.textContent = 'Dimensions: ' + this.sddh[this.sddh.length - 5]
    this.rdne.textContent = 'N: ' + this.snh[this.snh.length - 5]
    this.rdde.textContent = 'Interval: ' + this.sdh[this.sdh.length - 5]
    this.ree.textContent = 'avg acc: ' + this.sah[this.sah.length - 6] + '%'
    this.rese.textContent = 'Stimuli: ' + this.ssh[this.ssh.length - 6]
    this.reie.textContent = 'Iterations: ' + this.sih[this.sih.length - 6]
    this.redde.textContent = 'Dimensions: ' + this.sddh[this.sddh.length - 6]
    this.rene.textContent = 'N: ' + this.snh[this.snh.length - 6]
    this.rede.textContent = 'Interval: ' + this.sdh[this.sdh.length - 6]
    const aa = this.sah[this.sah.length - 1]
    const as = this.ssh[this.ssh.length - 1]
    const ai = this.sih[this.sih.length - 1]
    const an = this.snh[this.snh.length - 1]
    const ad = this.sdh[this.sdh.length - 1]
    const add = this.sddh[this.sddh.length - 1]
    const ba = this.sah[this.sah.length - 2]
    const bs = this.ssh[this.ssh.length - 2]
    const bi = this.sih[this.sih.length - 2]
    const bn = this.snh[this.snh.length - 2]
    const bd = this.sdh[this.sdh.length - 2]
    const bdd = this.sddh[this.sddh.length - 2]
    const ca = this.sah[this.sah.length - 3]
    const cs = this.ssh[this.ssh.length - 3]
    const ci = this.sih[this.sih.length - 3]
    const cn = this.snh[this.snh.length - 3]
    const cd = this.sdh[this.sdh.length - 3]
    const cdd = this.sddh[this.sddh.length - 3]
    const da = this.sah[this.sah.length - 4]
    const ds = this.ssh[this.ssh.length - 4]
    const di = this.sih[this.sih.length - 4]
    const dn = this.snh[this.snh.length - 4]
    const dd = this.sdh[this.sdh.length - 4]
    const ddd = this.sddh[this.sddh.length - 4]
    const ea = this.sah[this.sah.length - 5]
    const es = this.ssh[this.ssh.length - 5]
    const ei = this.sih[this.sih.length - 5]
    const en = this.snh[this.snh.length - 5]
    const ed = this.sdh[this.sdh.length - 5]
    const edd = this.sddh[this.sddh.length - 5]
    const fa = this.sah[this.sah.length - 6]
    const fs = this.ssh[this.ssh.length - 6]
    const fi = this.sih[this.sih.length - 6]
    const fn = this.snh[this.snh.length - 6]
    const fd = this.sdh[this.sdh.length - 6]
    const fdd = this.sddh[this.sddh.length - 6]
    localStorage.setItem('aa', aa)
    localStorage.setItem('as', as)
    localStorage.setItem('ai', ai)
    localStorage.setItem('an', an)
    localStorage.setItem('ad', ad)
    localStorage.setItem('ba', ba)
    localStorage.setItem('bs', bs)
    localStorage.setItem('bi', bi)
    localStorage.setItem('bn', bn)
    localStorage.setItem('bd', bd)
    localStorage.setItem('ca', ca)
    localStorage.setItem('cs', cs)
    localStorage.setItem('ci', ci)
    localStorage.setItem('cn', cn)
    localStorage.setItem('cd', cd)
    localStorage.setItem('da', da)
    localStorage.setItem('ds', ds)
    localStorage.setItem('di', di)
    localStorage.setItem('dn', dn)
    localStorage.setItem('dd', dd)
    localStorage.setItem('ea', ea)
    localStorage.setItem('es', es)
    localStorage.setItem('ei', ei)
    localStorage.setItem('en', en)
    localStorage.setItem('ed', ed)
    localStorage.setItem('fa', fa)
    localStorage.setItem('fs', fs)
    localStorage.setItem('fi', fi)
    localStorage.setItem('fn', fn)
    localStorage.setItem('fd', fd)
    localStorage.setItem('add', add)
    localStorage.setItem('bdd', bdd)
    localStorage.setItem('cdd', cdd)
    localStorage.setItem('ddd', ddd)
    localStorage.setItem('edd', edd)
    localStorage.setItem('fdd', fdd)
    if (intervalId) {
        clearInterval(intervalId);  // Stop the interval
        intervalId = null;  // Reset the interval ID so it can be started again
    }
});
// Colors array - you can expand this with more colors if needed
const colors = ['DeepSkyBlue', '#d7ff00', 'Crimson', 'ForestGreen', 'Tomato', 'MediumSlateBlue', 'HotPink'];
const chars = ['A', 'B', 'D', 'E', 'G', 'K', 'L', 'P', 'M']
const charcs = ['ForestGreen', 'DodgerBlue', 'MediumSpringGreen', 'BlueViolet', 'FireBrick', 'GoldenRod'];
const words = ['NBack', 'hglf', 'city', 'realm', 'way', 'why', 'how']
const sizes = [40, 65, 90, 115, 140]
const wsizes = [15, 23, 31, 39, 47]
const rotations = [30, 70, 120, 180, 220, 270]
const color = colors[Math.floor(Math.random() * colors.length)];
const schar = chars[Math.floor(Math.random() * chars.length)];
const size = sizes[Math.floor(Math.random() * sizes.length)];
const rotation = rotations[Math.floor(Math.random() * rotations.length)];

// Function to generate random cell and color

function generateStimuli() {
this.stimulic++
this.itc = this.stimulic / N
this.accc = this.mistakes + this.correct
this.accu = 100 / this.accc
this.accuracy = this.accu * this.correct
sc.textContent = 'Stimuli: ' + this.stimulic
ic.textContent = 'Iterations: ' + this.itc
ac.textContent = 'Accuracy: ' + this.accuracy + '%'
if (this.accc !== 0) {
this.AccuracyHistory.push(this.accuracy)
this.msc++
this.mat = this.mat + this.accuracy
this.ama = this.mat / this.msc
}
    // Select a random cell (from 0 to 26, representing the 27 cells)
    
     const randomPositionIndex = Math.floor(Math.random() * 27);
    const randomCellIndex = Math.floor(Math.random() * 27);
    while (randomPositionIndex === randomCellIndex) {
        const randomCellIndex = Math.floor(Math.random() * 27);
    }
    const cell = document.getElementById(`cell-${randomCellIndex}`);
const position = document.getElementById(`cell-${randomPositionIndex}`)
    // Select a random color
    const color = colors[Math.floor(Math.random() * colors.length)];
const schar = chars[Math.floor(Math.random() * chars.length)];
const size = sizes[Math.floor(Math.random() * sizes.length)];
const rotation = rotations[Math.floor(Math.random() * rotations.length)];
const charc = charcs[Math.floor(Math.random() * charcs.length)];
const word = words[Math.floor(Math.random() * words.length)];
const wsize = wsizes[Math.floor(Math.random() * wsizes.length)];
    // Store the selected cell and color
    
    this.CellHistory.push(cell)
    this.ColorHistory.push(color)
    this.CharHistory.push(schar)
    this.SizeHistory.push(size)
    this.RotationHistory.push(rotation)
    this.PositionHistory.push(position)
    this.CharcHistory.push(charc)
    this.WordHistory.push(word)
    this.WsizeHistory.push(wsize)
    if (this.CellHistory.length > this.maxstim) {
        this.CellHistory.shift()
    }
    if (this.ColorHistory.length > this.maxstim) {
        this.ColorHistory.shift()
    }
    if (this.CharHistory.length > this.maxstim) {
        this.CharHistory.shift()
    }
    if (this.SizeHistory.length > this.maxstim) {
        this.SizeHistory.shift()
    }
    if (this.PositionHistory.length > this.maxstim) {
        this.CellHistory.shift()
    }
    if (this.RotationHistory.length > this.maxstim) {
        this.ColorHistory.shift()
    }
    if (this.CharcHistory.length > this.maxstim) {
        this.CharcHistory.shift()
    }
    if (this.WordHistory.length > this.maxstim) {
        this.WordHistory.shift()
    }
    if (this.WsizeHistory.length > this.maxstim) {
        this.WsizeHistory.shift()
    }
    
    
    // Apply the color to the selected cell
   highlightCell(cell, color, position, schar, size, rotation, charc, word, wsize);
     // Adjust the time to suit your needs


    // Optional: Remove highlight after a delay (to simulate "lighting up" effect)
// Function to apply the color to a cell (lighting up)
function highlightCell(cell, color, position, schar, size, rotation, charc, word, wsize) {
    // Create a new div for the character in the position
    if (this.chare) {
    const CharPosition = document.createElement('div');
    CharPosition.textContent = schar;
    this.CharPosition = CharPosition;
    }
    if (this.sizee && this.chare) {
    CharPosition.style.fontSize = `${size}px`;
    }
    if (this.ccolor !== true && this.chare) {
        CharPosition.style.color = '#fff'
    }
    if (this.sizee !== true && this.chare) {
        CharPosition.style.fontSize = `${50}px`
    }
    if (this.ccolore && this.chare) {
    CharPosition.style.color = charc;
    }
    if (this.rotatione && this.chare) {
    CharPosition.style.transform = `rotateX(${rotation}deg)`;  // Rotate only the character
    CharPosition.style.transform = `rotateY(${rotation}deg)`;
    }

    if (this.chare) {
    position.appendChild(this.CharPosition);  // Add the character to the position
    
    }

    // Apply the color to the faces of the selected cell
    const faces = cell.querySelectorAll('div');
    faces.forEach(face => {
        face.style.backgroundColor = color;
        if (this.worde) {
        face.textContent = word
        }
        if (this.wsizee) {
        face.style.fontSize = `${wsize}px`
        }
        face.style.textAlign = 'center'
        face.style.color = '#fff'
          // Light up the cell with the chosen color
    });

    // Store the CharPosition element for future reference (to remove it later)
    
}
// Inside the generateStimuli function, use an arrow function for setTimeout
setTimeout(() => {
    this.resetCell(cell, position);  // Use arrow function to preserve the 'this' context
}, this.delayInterval / 1.5);
this.resetCell = function resetCell(cell, position) {
    // Reset the background color of the cell to transparent
    const faces = cell.querySelectorAll('div');
    faces.forEach(face => {
        face.style.backgroundColor = 'rgba(255, 255, 255, 0.008)';  // Reset to transparent
        face.textContent = ''
    });

    // Remove the character from the position (only if it exists)
    if (this.CharPosition && this.CharPosition.parentNode === position) {
        position.removeChild(this.CharPosition);  // Remove only the character element
    }

    // Check for matches and reset button states if needed
    if (this.difmode !== true) {
    if (cellBtnp === false) {
        this.checkCell();
    }
    if (colorBtnp === false) {
        this.checkColor();
    }
    if (charBtnp === false && this.chare) {
        this.checkChar();
    }
    if (sizeBtnp === false && this.sizee && this.chare) {
        this.checkSize();
    }
    if (rotationBtnp === false && this.rotatione && this.chare) {
        this.checkRotation();
    }
    if (positionBtnp === false && this.chare) {
        this.checkPosition();
    }
    if (charcBtnp === false && this.ccolore && this.chare) {
        this.checkCharc();
    }
    if (wordBtnp === false && this.worde) {
        this.checkWord();
    }
    if (wsizeBtnp === false && this.worde && this.wsizee) {
        this.checkWsize();
    }
    }
    if (this.difmode) {
        if (cellBtnp === false) {
        this.checkCelld();
    }
    if (colorBtnp === false) {
        this.checkColord();
    }
    if (charBtnp === false && this.chare) {
        this.checkChard();
    }
    if (sizeBtnp === false && this.sizee && this.chare) {
        this.checkSized();
    }
    if (rotationBtnp === false && this.rotatione && this.chare) {
        this.checkRotationd();
    }
    if (positionBtnp === false && this.chare) {
        this.checkPositiond();
    }
    if (charcBtnp === false && this.ccolore && this.chare) {
        this.checkCharcd();
    }
    if (wordBtnp === false && this.worde) {
        this.checkWordd();
    }
    if (wsizeBtnp === false && this.worde && this.wsizee) {
        this.checkWsized();
    }
    }
    
    // Reset all button states for the next round
    cellBtnnp = true
    colorBtnnp = true
    sizeBtnnp = true
    rotationBtnnp = true
    charBtnnp = true
    positionBtnnp = true
    charcBtnnp = true
    wordBtnnp = true
    wsizeBtnnp = true
    wsizeBtnp = false
    wordBtnp = false
    cellBtnp = false
    colorBtnp = false
    sizeBtnp = false
    rotationBtnp = false
    charBtnp = false
    positionBtnp = false
    charcBtnp = false
}


}
function checkCell() {
        if (N > 0 && this.CellHistory.length >= N) {
            const nStepsAgoCell = this.CellHistory[this.CellHistory.length - N - 1];
            console.log('N steps ago cell:', nStepsAgoCell);
            const currentCell = this.CellHistory[this.CellHistory.length - 1];
            if (nStepsAgoCell !== undefined && nStepsAgoCell === currentCell && cellBtnnp === false) {
                this.cellBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoCell !== undefined && nStepsAgoCell === currentCell && cellBtnnp === true) {
                this.cellBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoCell !== undefined && nStepsAgoCell !== currentCell && cellBtnnp === false) {
                this.cellBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.cellBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkColor() {
        if (N > 0 && this.ColorHistory.length >= N) {
            const nStepsAgoColor = this.ColorHistory[this.ColorHistory.length - N - 1];
            console.log('N steps ago color:', nStepsAgoColor);
            const currentColor = this.ColorHistory[this.ColorHistory.length - 1];
            
            if (nStepsAgoColor !== undefined && nStepsAgoColor === currentColor && colorBtnnp === false) {
                this.colorBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoColor !== undefined && nStepsAgoColor === currentColor && colorBtnnp === true) {
                this.colorBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoColor !== undefined && nStepsAgoColor !== currentColor && colorBtnnp === false) {
                this.colorBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.colorBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkPosition() {
        if (N > 0 && this.PositionHistory.length >= N) {
            const nStepsAgoPosition = this.PositionHistory[this.PositionHistory.length - N - 1];
            console.log('N steps ago position:', nStepsAgoPosition);
            const currentPosition = this.PositionHistory[this.PositionHistory.length - 1];
            
            if (nStepsAgoPosition !== undefined && nStepsAgoPosition === currentPosition && positionBtnnp === false) {
                this.positionBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoPosition !== undefined && nStepsAgoPosition === currentPosition && positionBtnnp === true) {
                this.positionBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoPosition !== undefined && nStepsAgoPosition !== currentPosition && positionBtnnp === false) {
                this.positionBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.positionBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkSize() {
        if (N > 0 && this.SizeHistory.length >= N) {
            const nStepsAgoSize = this.SizeHistory[this.SizeHistory.length - N - 1];
            console.log('N steps ago size:', nStepsAgoSize);
            const currentSize = this.SizeHistory[this.SizeHistory.length - 1];
            
            if (nStepsAgoSize !== undefined && nStepsAgoSize === currentSize && sizeBtnnp === false) {
                this.sizeBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoSize !== undefined && nStepsAgoSize === currentSize && sizeBtnnp === true) {
                this.sizeBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoSize !== undefined && nStepsAgoSize !== currentSize && sizeBtnnp === false) {
                this.sizeBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.sizeBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkRotation() {
        if (N > 0 && this.RotationHistory.length >= N) {
            const nStepsAgoRotation = this.RotationHistory[this.RotationHistory.length - N - 1];
            console.log('N steps ago rotation:', nStepsAgoRotation);
            const currentRotation = this.RotationHistory[this.RotationHistory.length - 1];
            
            if (nStepsAgoRotation !== undefined && nStepsAgoRotation === currentRotation && rotationBtnnp === false) {
                this.rotationBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoRotation !== undefined && nStepsAgoRotation === currentRotation && rotationBtnnp === true) {
                this.rotationBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoRotation !== undefined && nStepsAgoRotation !== currentRotation && rotationBtnnp === false) {
                this.rotationBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.rotationBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkChar() {
        if (N > 0 && this.CharHistory.length >= N) {
            const nStepsAgoChar = this.CharHistory[this.CharHistory.length - N - 1];
            console.log('N steps ago char:', nStepsAgoChar);
            const currentChar = this.CharHistory[this.CharHistory.length - 1];
            
            if (nStepsAgoChar !== undefined && nStepsAgoChar === currentChar && charBtnnp === false) {
                this.charBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoChar !== undefined && nStepsAgoChar === currentChar && charBtnnp === true) {
                this.charBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoChar !== undefined && nStepsAgoChar !== currentChar && charBtnnp === false) {
                this.charBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.charBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkCharc() {
        if (N > 0 && this.CharcHistory.length >= N) {
            const nStepsAgoCharc = this.CharcHistory[this.CharcHistory.length - N - 1];
            console.log('N steps ago charc:', nStepsAgoCharc);
            const currentCharc = this.CharcHistory[this.CharcHistory.length - 1];
            
            if (nStepsAgoCharc !== undefined && nStepsAgoCharc === currentCharc && charcBtnnp === false) {
                this.charcBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoCharc !== undefined && nStepsAgoCharc === currentCharc && charcBtnnp === true) {
                this.charcBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoCharc !== undefined && nStepsAgoCharc !== currentCharc && charcBtnnp === false) {
                this.charcBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.charcBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkWord() {
        if (N > 0 && this.WordHistory.length >= N) {
            const nStepsAgoWord = this.WordHistory[this.WordHistory.length - N - 1];
            console.log('N steps ago word:', nStepsAgoWord);
            const currentWord = this.WordHistory[this.WordHistory.length - 1];
            
            if (nStepsAgoWord !== undefined && nStepsAgoWord === currentWord && wordBtnnp === false) {
                this.wordBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoWord !== undefined && nStepsAgoWord === currentWord && wordBtnnp === true) {
                this.wordBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoWord !== undefined && nStepsAgoWord !== currentWord && wordBtnnp === false) {
                this.wordBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.wordBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkWsize() {
        if (N > 0 && this.WsizeHistory.length >= N) {
            const nStepsAgoWsize = this.WsizeHistory[this.WsizeHistory.length - N - 1];
            console.log('N steps ago wsize:', nStepsAgoWsize);
            const currentWsize = this.WsizeHistory[this.WsizeHistory.length - 1];
            
            if (nStepsAgoWsize !== undefined && nStepsAgoWsize === currentWsize && wsizeBtnnp === false) {
                this.wsizeBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoWsize !== undefined && nStepsAgoWsize === currentWsize && wsizeBtnnp === true) {
                this.wsizeBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoWsize !== undefined && nStepsAgoWsize !== currentWsize && wsizeBtnnp === false) {
                this.wsizeBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.wsizeBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkCelld() {
        if (N > 0 && this.CellHistory.length >= N) {
            const nStepsAgoCell = this.CellHistory[this.CellHistory.length - N - 1];
            console.log('N steps ago cell:', nStepsAgoCell);
            const currentCell = this.CellHistory[this.CellHistory.length - 1];
            if (nStepsAgoCell !== undefined && nStepsAgoCell !== currentCell && cellBtnnp === false) {
                this.cellBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoCell !== undefined && nStepsAgoCell !== currentCell && cellBtnnp === true) {
                this.cellBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoCell !== undefined && nStepsAgoCell === currentCell && cellBtnnp === false) {
                this.cellBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.cellBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkColord() {
        if (N > 0 && this.ColorHistory.length >= N) {
            const nStepsAgoColor = this.ColorHistory[this.ColorHistory.length - N - 1];
            console.log('N steps ago color:', nStepsAgoColor);
            const currentColor = this.ColorHistory[this.ColorHistory.length - 1];
            
            if (nStepsAgoColor !== undefined && nStepsAgoColor !== currentColor && colorBtnnp === false) {
                this.colorBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoColor !== undefined && nStepsAgoColor !== currentColor && colorBtnnp === true) {
                this.colorBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoColor !== undefined && nStepsAgoColor === currentColor && colorBtnnp === false) {
                this.colorBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.colorBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkPositiond() {
        if (N > 0 && this.PositionHistory.length >= N) {
            const nStepsAgoPosition = this.PositionHistory[this.PositionHistory.length - N - 1];
            console.log('N steps ago position:', nStepsAgoPosition);
            const currentPosition = this.PositionHistory[this.PositionHistory.length - 1];
            
            if (nStepsAgoPosition !== undefined && nStepsAgoPosition !== currentPosition && positionBtnnp === false) {
                this.positionBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoPosition !== undefined && nStepsAgoPosition !== currentPosition && positionBtnnp === true) {
                this.positionBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoPosition !== undefined && nStepsAgoPosition === currentPosition && positionBtnnp === false) {
                this.positionBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.positionBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkSized() {
        if (N > 0 && this.SizeHistory.length >= N) {
            const nStepsAgoSize = this.SizeHistory[this.SizeHistory.length - N - 1];
            console.log('N steps ago size:', nStepsAgoSize);
            const currentSize = this.SizeHistory[this.SizeHistory.length - 1];
            
            if (nStepsAgoSize !== undefined && nStepsAgoSize !== currentSize && sizeBtnnp === false) {
                this.sizeBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoSize !== undefined && nStepsAgoSize !== currentSize && sizeBtnnp === true) {
                this.sizeBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoSize !== undefined && nStepsAgoSize === currentSize && sizeBtnnp === false) {
                this.sizeBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.sizeBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkRotationd() {
        if (N > 0 && this.RotationHistory.length >= N) {
            const nStepsAgoRotation = this.RotationHistory[this.RotationHistory.length - N - 1];
            console.log('N steps ago rotation:', nStepsAgoRotation);
            const currentRotation = this.RotationHistory[this.RotationHistory.length - 1];
            
            if (nStepsAgoRotation !== undefined && nStepsAgoRotation !== currentRotation && rotationBtnnp === false) {
                this.rotationBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoRotation !== undefined && nStepsAgoRotation !== currentRotation && rotationBtnnp === true) {
                this.rotationBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoRotation !== undefined && nStepsAgoRotation === currentRotation && rotationBtnnp === false) {
                this.rotationBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.rotationBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkChard() {
        if (N > 0 && this.CharHistory.length >= N) {
            const nStepsAgoChar = this.CharHistory[this.CharHistory.length - N - 1];
            console.log('N steps ago char:', nStepsAgoChar);
            const currentChar = this.CharHistory[this.CharHistory.length - 1];
            
            if (nStepsAgoChar !== undefined && nStepsAgoChar !== currentChar && charBtnnp === false) {
                this.charBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoChar !== undefined && nStepsAgoChar !== currentChar && charBtnnp === true) {
                this.charBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoChar !== undefined && nStepsAgoChar === currentChar && charBtnnp === false) {
                this.charBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.charBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkCharcd() {
        if (N > 0 && this.CharcHistory.length >= N) {
            const nStepsAgoCharc = this.CharcHistory[this.CharcHistory.length - N - 1];
            console.log('N steps ago charc:', nStepsAgoCharc);
            const currentCharc = this.CharcHistory[this.CharcHistory.length - 1];
            
            if (nStepsAgoCharc !== undefined && nStepsAgoCharc !== currentCharc && charcBtnnp === false) {
                this.charcBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoCharc !== undefined && nStepsAgoCharc !== currentCharc && charcBtnnp === true) {
                this.charcBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoCharc !== undefined && nStepsAgoCharc === currentCharc && charcBtnnp === false) {
                this.charcBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.charcBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkWordd() {
        if (N > 0 && this.WordHistory.length >= N) {
            const nStepsAgoWord = this.WordHistory[this.WordHistory.length - N - 1];
            console.log('N steps ago word:', nStepsAgoWord);
            const currentWord = this.WordHistory[this.WordHistory.length - 1];
            
            if (nStepsAgoWord !== undefined && nStepsAgoWord !== currentWord && wordBtnnp === false) {
                this.wordBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoWord !== undefined && nStepsAgoWord !== currentWord && wordBtnnp === true) {
                this.wordBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoWord !== undefined && nStepsAgoWord === currentWord && wordBtnnp === false) {
                this.wordBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.wordBtn.style.backgroundColor = '';
            }, 750); 
        }
}
function checkWsized() {
        if (N > 0 && this.WsizeHistory.length >= N) {
            const nStepsAgoWsize = this.WsizeHistory[this.WsizeHistory.length - N - 1];
            console.log('N steps ago wsize:', nStepsAgoWsize);
            const currentWsize = this.WsizeHistory[this.WsizeHistory.length - 1];
            
            if (nStepsAgoWsize !== undefined && nStepsAgoWsize !== currentWsize && wsizeBtnnp === false) {
                this.wsizeBtn.style.backgroundColor = '#00dd43';
                this.correct++
            } else if (nStepsAgoWsize !== undefined && nStepsAgoWsize !== currentWsize && wsizeBtnnp === true) {
                this.wsizeBtn.style.backgroundColor = '#8900cd';
                this.mistakes++
            } else if (nStepsAgoWsize !== undefined && nStepsAgoWsize === currentWsize && wsizeBtnnp === false) {
                this.wsizeBtn.style.backgroundColor = '#dd0023'
                this.mistakes++
            }
            
            setTimeout(() => {
                this.wsizeBtn.style.backgroundColor = '';
            }, 750); 
        }
}
// Trigger stimuli generation at regular intervals (delay of 2 seconds here, adjust as needed)
