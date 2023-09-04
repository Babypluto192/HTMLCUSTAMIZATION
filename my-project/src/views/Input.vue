<template>
  <div>
    <HeaderMenu/>
    <div>

      <ColorDetail :ColorChange="ColorChange"/>
      <details>
        <summary> Настройки типа</summary>
        <select v-model="type" >
          <option>
            text
          </option>
          <option>
            file
          </option>

          <option>
            color
          </option>
          <option>
            date
          </option>
          <option>
            time
          </option>
          <option>
            password
          </option>
          <option>
            submit
          </option>
          <option>
            search
          </option>
          <option>
            radio
          </option>
          <option>
            checkbox
          </option>
        </select>
      </details>
      <div class="btn-div">
        <input
            :style="{background: color,color: textColor, width: width + 'px', height: height + 'px', fontSize: font + 'em',border: borderSize + 'px' + ' '  + border + ' ' + borderColor }" class="btn" :placeholder="text" :type="type" />
      </div>
      <TextDetail :TextChange="TextChange" />
      <BorderDetail :BorderChange="BorderChange"/>
      <SizeDetail :SizeChange="SizeChange"/>
    </div>

    <ConclusionDetail >
      <div class="area-container">

        <p>HTML</p>
        <p  >
          {{startTag + 'placeholder="' + text + '"'+ ' ' + 'type ="'+ type + '"' + endTag}}
        </p>
        <p>
          CSS
        </p>
        <p>
          .input {
          color: {{color}};
          background: {{textColor}};
          width: {{width}}px
          height: {{height}}px
          display: flex;
          align-items: center;
          justify-content: center;
          border: {{borderSize}}px  {{border}} {{borderColor}}

          }
        </p>
      </div>
    </ConclusionDetail>


  </div>


</template>

<script>
import HeaderMenu from "@/components/Header-menu";
import ColorDetail from "@/components/ColorDetail";
import TextDetail from "@/components/TextDetail";
import BorderDetail from "@/components/BorderDetail";
import SizeDetail from "@/components/SizeDetail";
import ConclusionDetail from "@/components/ConclusionDetail";
export default {
  name: "TextCustomization",
  components: {
    HeaderMenu, ColorDetail, TextDetail, BorderDetail, SizeDetail, ConclusionDetail
  },
  data() {
    return {
      color: '#ffffff',
      textColor: '#000000',
      text: '',
      startTag: '<input class="input" ',
      endTag: ' />',
      width: '80',
      height: '40',
      font: '1',
      border: 'solid',
      borderColor: '#000000',
      borderSize: '1',
      type: 'text'


    }
  },

  methods: {
    ColorChange(data) {
      this.color = data.color
      this.textColor = data.textColor
    },
    TextChange(data) {
      this.text = data.text
      this.font = data.font
    },
    BorderChange(data){
      this.border = data.border
      this.borderSize = data.borderSize
      this.borderColor = data.borderColor
    },
    SizeChange(data) {
      this.width = data.width
      this.height = data.height
    },


  }
}
</script>

<style lang="scss" scoped>
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
  max-width: 160px;
}
summary {
  margin-bottom: 1em;
}
.select {
  margin-top: 1rem;
}
details[open] {
  padding: 0.5em;
}
.input {
  width: 7vw;
}

.btn-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  flex-wrap: nowrap;
  display: flex;

  width: 100px;
  height: 40px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

}
.area-container {
  margin-top: 2rem;
  .area {

    width: 600px;
    height: 200px;
  }
  p {

  }
}



</style>