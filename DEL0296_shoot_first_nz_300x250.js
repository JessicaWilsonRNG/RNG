(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Arrow_straight = function() {
	this.initialize(img.Arrow_straight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,218);


(lib.globe_300x600 = function() {
	this.initialize(img.globe_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.map_hoven_300x600 = function() {
	this.initialize(img.map_hoven_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("AROUND YOU", "bold 31px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 33;
	this.text.lineWidth = 212;
	this.text.parent = this;
	this.text.setTransform(2,30.7);

	this.text_1 = new cjs.Text("IT ALL REVOLVES", "bold 24px 'Helvetica'", "#FFFFFF");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 212;
	this.text_1.parent = this;
	this.text_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216.1,63.7);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#213A71").s().p("AhgBzIAAjlIBhAAQAxAAAZAgQAWAdAAAwQAAA5gaAgQgZAfgtAAgAgxBMIAnAAQA6AAAAhNQAAglgMgRQgOgUggAAIgnAAg");
	this.shape.setTransform(31.3,16.8,0.48,0.48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#213A71").s().p("Ag8BCQgVgWAAgqQAAgiAPgXQAWgiAvAAQApAAAVAbQARAXAAAmIAAAMIh1AAQACAqAiABQAPgBAJgGQAFgEAEgIIAuAAQgEAWgVAQQgWARggAAQgnAAgWgYgAAkgRQgDgkgfAAQgRAAgKALQgIAKgCAPIBHAAIAAAAg");
	this.shape_1.setTransform(40.6,18.3,0.48,0.48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#213A71").s().p("Ag+BKQgMgNAAgWQAAgcATgNQAOgKAcgFIASgDQALgBAHgDQAIgDAAgKQAAgRgagBQgaABgEAVIgrAAQAEg4BFAAQAlAAARAPQAQANAAAcIAAB2IgrAAIAAgUQgVAYggAAQgbAAgOgPgAAOAIIgTAFQgZAFAAASQAAAWAWAAQAVAAALgOQAHgJAAgMIAAgUQgGADgLACg");
	this.shape_2.setTransform(56.6,18.3,0.48,0.48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#213A71").s().p("Ag+BKQgNgNAAgWQABgcATgNQAPgKAbgFIASgDQALgBAHgDQAIgDAAgKQAAgRgbgBQgZABgEAVIgsAAQAHg4BDAAQAlAAARAPQAQANAAAcIAAB2IgrAAIAAgUQgVAYggAAQgbAAgOgPgAANAIIgSAFQgZAFAAASQAAAWAXAAQAUAAAKgOQAIgJAAgMIAAgUQgGADgMACg");
	this.shape_3.setTransform(72.3,18.3,0.48,0.48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#213A71").s().p("AhFBzIAAjlIAvAAIAAC8IBcAAIAAApg");
	this.shape_4.setTransform(48.8,16.8,0.48,0.48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#213A71").s().p("AgaBUIg6inIAzAAIAiB/IAkh/IAwAAIg6Cng");
	this.shape_5.setTransform(64.6,18.3,0.48,0.48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#213A71").s().p("AgVBzIAAjlIArAAIAADlg");
	this.shape_6.setTransform(78,16.8,0.48,0.48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#213A71").s().p("Ah1CEICYkHIBTCPIAAAAQgZgbgjAAQggAAgXAVQgVAWAAAgQAAAaAQAVQANATAVAGIAAAAg");
	this.shape_7.setTransform(13.7,15.9,0.48,0.48);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FD3C22").s().p("AgoAAIAbggIA1AAIg0BBg");
	this.shape_8.setTransform(21.9,17.2,0.48,0.48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#213A71").s().p("AgyATIAAgBQARgFAPgRIALgOIAIAKQAYAXAaADIAAABg");
	this.shape_9.setTransform(20.3,21.3,0.48,0.48);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#213A71").s().p("AgcAYQgKgKAAgOQAAgNAKgKQAKgKAOAAQAPAAALAMIARAVIgRAVQgKANgQAAQgOAAgKgKg");
	this.shape_10.setTransform(16.7,18.8,0.48,0.48);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AuTkRQAAgmAagaQAbgbAlAAIZyAAQAmAAAbAbQAaAaAAAmIAAJ8I8nACg");
	this.shape_11.setTransform(44,17.5,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,88,35.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("OF DAIRY FARMING", "bold 21px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 23;
	this.text.lineWidth = 272;
	this.text.parent = this;
	this.text.setTransform(1.8,69,0.878,0.878);

	this.text_1 = new cjs.Text("FUTURE", "bold 52px 'Helvetica'", "#13487C");
	this.text_1.lineHeight = 54;
	this.text_1.lineWidth = 272;
	this.text_1.parent = this;
	this.text_1.setTransform(1.8,24.3,0.878,0.878);

	this.text_2 = new cjs.Text("HERE COMES THE", "bold 23px 'Helvetica'", "#FFFFFF");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 271;
	this.text_2.parent = this;
	this.text_2.setTransform(1.8,1.8,0.878,0.878);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,242.1,89.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Arrow_straight();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.47,1.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1470,320.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("DeLaval Test Farm", "20px 'Helvetica'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(89,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,25.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(735,160.2,1,1,0,0,0,735,160.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,1470,320.5), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(735,160.2,1,1,0,0,0,735,160.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1470,320.5);


// stage content:
(lib.DEL0296_shoot_first_nz_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.loopsPlayed) {
			this.loopsPlayed = 0;
		}
	}
	this.frame_359 = function() {
		this.loopsPlayed++; console.log(this.loopsPlayed);
		
		if (this.loopsPlayed >= 2) {
			this.stop();	
		} else {
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(359).call(this.frame_359).wait(1));

	// Layer_10
	this.text = new cjs.Text("TO FIND OUT MORE", "13px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(16.2,223);

	this.text_1 = new cjs.Text("CLICK HERE", "bold 20px 'Helvetica'", "#26B3FF");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 134;
	this.text_1.parent = this;
	this.text_1.setTransform(16.4,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},289).wait(71));

	// It all revolves text
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-167.9,113.2,1,1,0,0,0,108,31.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(289).to({_off:false},0).wait(1).to({regY:31.9,x:-138.9,y:113.3},0).wait(1).to({x:-109.9},0).wait(1).to({x:-80.9},0).wait(1).to({x:-51.9},0).wait(1).to({x:-22.9},0).wait(1).to({x:6.2},0).wait(1).to({x:35.2},0).wait(1).to({x:64.2},0).wait(1).to({x:93.2},0).wait(1).to({x:122.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Logo
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239.5,275,1,1,0,0,0,44,17.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(216).to({_off:false},0).wait(1).to({y:271.1},0).wait(1).to({y:267.2},0).wait(1).to({y:263.4},0).wait(1).to({y:259.5},0).wait(1).to({y:255.6},0).wait(1).to({y:251.8},0).wait(1).to({y:247.9},0).wait(1).to({y:244},0).wait(1).to({y:240.2},0).wait(1).to({y:236.3},0).wait(1).to({y:232.5},0).wait(133));

	// Arrow 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-642,94.2,1,1,0,0,0,735,160.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).wait(1).to({x:-612.9},0).wait(1).to({x:-583.9},0).wait(1).to({x:-554.9},0).wait(1).to({x:-525.9},0).wait(1).to({x:-496.9},0).wait(1).to({x:-467.9},0).wait(1).to({x:-438.9},0).wait(1).to({x:-409.9},0).wait(1).to({x:-380.9},0).wait(1).to({x:-351.9},0).wait(61));

	// Future of farming text
	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-143.8,109.2,1,1,0,0,0,107.5,43.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(216).to({_off:false},0).wait(1).to({regX:121,regY:44.6,x:-103.1,y:110.7},0).wait(1).to({x:-75.9},0).wait(1).to({x:-48.7},0).wait(1).to({x:-21.5},0).wait(1).to({x:5.7},0).wait(1).to({x:32.8},0).wait(1).to({x:60},0).wait(1).to({x:87.2},0).wait(1).to({x:114.4},0).wait(1).to({x:141.6},0).wait(1).to({x:168.8},0).wait(48).to({x:267.2,y:110.3},0).wait(1).to({x:365.6,y:110},0).wait(1).to({x:464,y:109.7},0).wait(1).to({x:562.5,y:109.4},0).wait(1).to({x:660.9,y:109.1},0).wait(1).to({x:759.3,y:108.7},0).wait(1).to({x:857.7,y:108.4},0).wait(1).to({x:956.2,y:108.1},0).wait(1).to({x:1054.6,y:107.8},0).wait(1).to({x:1153,y:107.5},0).wait(1).to({x:1251.4,y:107.2},0).wait(1).to({x:1349.9,y:106.8},0).wait(1).to({x:1448.3,y:106.5},0).wait(1).to({x:1546.7,y:106.2},0).to({_off:true},1).wait(71));

	// Arrow 1
	this.instance_4 = new lib.Symbol4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-642,94.2,1,1,0,0,0,735,160.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(216).to({_off:false},0).wait(1).to({x:-614.8},0).wait(1).to({x:-587.6},0).wait(1).to({x:-560.4},0).wait(1).to({x:-533.2},0).wait(1).to({x:-506},0).wait(1).to({x:-478.9},0).wait(1).to({x:-451.7},0).wait(1).to({x:-424.5},0).wait(1).to({x:-397.3},0).wait(1).to({x:-370.1},0).wait(1).to({x:-342.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:-244.5,y:93.9},0).wait(1).to({x:-146.1,y:93.6},0).wait(1).to({x:-47.6,y:93.3},0).wait(1).to({x:50.8,y:93},0).wait(1).to({x:149.2,y:92.7},0).wait(1).to({x:247.6,y:92.3},0).wait(1).to({x:346.1,y:92},0).wait(1).to({x:444.5,y:91.7},0).wait(1).to({x:542.9,y:91.4},0).wait(1).to({x:641.3,y:91.1},0).wait(1).to({x:739.7,y:90.8},0).wait(1).to({x:838.2,y:90.4},0).wait(1).to({x:936.6,y:90.1},0).wait(1).to({x:1035,y:89.8},0).to({_off:true},1).wait(71));

	// This year text
	this.text_2 = new cjs.Text("they've been\ntesting", "bold 23px 'Helvetica'", "#00ACEC");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 226;
	this.text_2.parent = this;
	this.text_2.setTransform(21.1,75.1);

	this.text_3 = new cjs.Text("This year. You'll\nfind out what", "bold 23px 'Helvetica'", "#FFFFFF");
	this.text_3.lineHeight = 25;
	this.text_3.lineWidth = 241;
	this.text_3.parent = this;
	this.text_3.setTransform(21.1,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3},{t:this.text_2}]},144).to({state:[]},72).wait(144));

	// Farms operating
	this.text_4 = new cjs.Text("farms operating now", "bold 23px 'Helvetica'", "#00ACEC");
	this.text_4.lineHeight = 25;
	this.text_4.lineWidth = 226;
	this.text_4.parent = this;
	this.text_4.setTransform(19,45.8);

	this.text_5 = new cjs.Text("DeLaval have 128 test ", "bold 23px 'Helvetica'", "#FFFFFF");
	this.text_5.lineHeight = 25;
	this.text_5.lineWidth = 241;
	this.text_5.parent = this;
	this.text_5.setTransform(19,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_5},{t:this.text_4}]},72).to({state:[]},72).wait(216));

	// Farm background
	this.instance_5 = new lib.map_hoven_300x600();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-296);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},0).wait(288));

	// Test Farm Text
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(132.3,108.8,1,1,0,0,0,89,12.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:109.5,alpha:0.043},0).wait(1).to({y:110.2,alpha:0.087},0).wait(1).to({y:111,alpha:0.13},0).wait(1).to({y:111.7,alpha:0.174},0).wait(1).to({y:112.4,alpha:0.217},0).wait(1).to({y:113.2,alpha:0.261},0).wait(1).to({y:113.9,alpha:0.304},0).wait(1).to({y:114.7,alpha:0.348},0).wait(1).to({y:115.4,alpha:0.391},0).wait(1).to({y:116.1,alpha:0.435},0).wait(1).to({y:116.9,alpha:0.478},0).wait(1).to({y:117.6,alpha:0.522},0).wait(1).to({y:118.4,alpha:0.565},0).wait(1).to({y:119.1,alpha:0.609},0).wait(1).to({y:119.8,alpha:0.652},0).wait(1).to({y:120.6,alpha:0.696},0).wait(1).to({y:121.3,alpha:0.739},0).wait(1).to({y:122.1,alpha:0.783},0).wait(1).to({y:122.8,alpha:0.826},0).wait(1).to({y:123.5,alpha:0.87},0).wait(1).to({y:124.3,alpha:0.913},0).wait(1).to({y:125,alpha:0.957},0).wait(1).to({y:125.8,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(288));

	// Globe
	this.instance_7 = new lib.globe_300x600();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},72).wait(288));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,70,300,600);
// library properties:
lib.properties = {
	id: '3E5029D9417B49BCB6F3BD3A14699E01',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Arrow_straight.png", id:"Arrow_straight"},
		{src:"images/globe_300x600.jpg", id:"globe_300x600"},
		{src:"images/map_hoven_300x600.jpg", id:"map_hoven_300x600"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3E5029D9417B49BCB6F3BD3A14699E01'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;