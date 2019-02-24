var qrcodestreamerClass = {
  codeSize: 10,
  dataSize: 20,
  dataChunkSize: 0,
  iterator: 0,
  dataArr: [],
  codeArr: [],
  fullHash: "",
  dispFullHash: "",
  qrcodeObj: {},
  adler32Obj: {},
  initFunct: function(qrc, ad32) {
    this.qrcodeObj = qrc;
    this.adler32Obj = ad32;
  },
  inputData: function(data) {
    if(data.length > 10) {
      this.dataSize = Math.floor(data.length/4);
      if(this.dataSize > 50) {
        this.dataSize = 50;
      }
      this.dataChunkSize = Math.ceil(data.length/this.dataSize);
      this.codeSize = this.dataChunkSize.toString().length + 9;
      while(this.dataSize <= this.codeSize) {
        this.dataSize++;
        this.dataChunkSize = Math.ceil(data.length/this.dataSize);
        this.codeSize = this.dataChunkSize.toString().length + 9;
      }
      while(this.codeSize >= this.dataSize) {
        this.dataSize++;
        this.dataChunkSize = Math.ceil(data.length/this.dataSize);
        this.codeSize = this.dataChunkSize.toString().length + 9;
      }
      this.dataArr = [];
      for(var i = 0;i < this.dataChunkSize;i++) {
        while(data.length < this.dataSize) {
          data = data + "\0";
        }
        this.dataArr.push(data.substr(0, this.dataSize));
        data = data.substr(this.dataSize);
      }
      this.hashData();
    }
  },
  hashData: function() {
    this.codeArr = [];
    var temp3 = "";
    while(this.dataArr.length > this.codeArr.length) {
      this.codeArr.push(-1);
    }
    for(var i = 0;i < this.codeArr.length;i++) {
      var temp = (new Uint32Array([this.adler32Obj.str(this.dataArr[i])]))[0].toString(16);
      while(temp.length < 8) {
        temp = "0" + temp;
      }
      var temp2 = i.toString();
      while(temp2.length < this.codeSize - 9) {
        temp2 = "0" + temp2;
      }
      this.codeArr[i] = temp2 + "|" + temp;
      temp3 = temp3 + this.dataArr[i];
    }
    var temp = (new Uint32Array([this.adler32Obj.str(temp3)]))[0].toString(16);
    while(temp.length < 8) {
      temp = "0" + temp;
    }
    this.fullHash = temp;
    this.dispFullHash = this.codeArr.length + "-" + temp;
    while(this.dispFullHash.length < this.codeSize) {
      this.dispFullHash = "0" + this.dispFullHash;
    }
  },
  nextCode: function() {
    if(this.iterator >= this.codeArr.length*2) {
      this.iterator = -1;
      this.qrcodeObj.foreground = "#004000"
      this.qrcodeObj.value = this.dispFullHash;
    }
    else if(this.iterator % 2 == 0) {
      this.qrcodeObj.foreground = "#400000"
      this.qrcodeObj.value = this.codeArr[Math.floor(this.iterator/2)];
    }
    else {
      this.qrcodeObj.foreground = "#000040"
      this.qrcodeObj.value = this.dataArr[Math.floor(this.iterator/2)];
    }
    this.iterator++;
  },
  clearFunc: function() {
    this.codeSize = 10;
    this.dataSize = 20;
    this.dataChunkSize = 0;
    this.iterator = 0;
    this.dataArr = [];
    this.codeArr = [];
    this.fullHash = "";
    this.dispFullHash = "";
  }
};
