<template lang="pug">
    div(class="container")
        h1 Le cryptage AtBash
        h4 Que fait-il ?
        p Atbash est une methode de chiffrement datant de -500 av J-C. Elle inverse simplement l'alphabet comme un miroir : A deviens Z, B devient Y..
        h4 Code
        pre(v-highlightjs="text")
          code(class="python")
        h4 Execution
        h5 Encodage
        label(for="icon_prefix") Texte à encoder
        input(id="icon_prefix" type="text" class="validate"  v-model='toEncode')
        label(for="icon_prefix") Sortie
        output
          code {{ resultEncode }}
        h5 Décodage
        label(for="icon_prefix") Texte à décoder
        input(id="icon_prefix" type="text" class="validate"  v-model='toDecode')
        label(for="icon_prefix") Sortie
        output
          code {{ resultDecode }}
</template>

<script>
import txt from '../assets/atbash.txt'

export default {
  name: 'atbash',
  data () {
    return {
      text: txt,
      toEncode: 'mettre_un_texte_ici',
      toDecode: 'nvggi vfmgv cgvrx r'
    }
  },
  methods: {
    encrypt: function (argument) {
      const key = this.getKey()
      var subject = argument.toLowerCase().replace(/[^a-z0-9]/, '')
      subject = [...subject].map((char) => key[char]).join('')
      return subject.trim()
    },
    getKey: function () {
      let out = {}
      var forward = 'abcdefghijklmnopqrstuvwxyz0123456789'
      var backward = 'zyxwvutsrqponmlkjihgfedcba0123456789'

      for (var x = 0; x < forward.length; x++) {
        out[forward.charAt(x)] = backward.charAt(x)
      }
      return out
    }
  },
  computed: {
    resultEncode: function () {
      return this.encrypt(this.toEncode)
    },
    resultDecode: function () {
      return this.encrypt(this.toDecode)
    }
  }
}
</script>

<style>
output {
  display: block;
  padding: 0.5em;
  background-color: #F0F0F0;
}

.container {
  margin-bottom: 200px;
}
</style>
