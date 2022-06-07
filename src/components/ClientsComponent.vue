<template>
  <v-container>
    <v-form 
      ref="form"
      v-model="valid"
      lazy-validation
      >
      <v-card>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              Geral
            </v-list-item-title>
              <v-col
                cols="12"
                md="12"
                >
                <v-switch
                  v-model="tipoCliente"
                  label="Pessoa Física / Pessoa Jurídica"
                ></v-switch>
              </v-col>
          </v-list-item-content>
        </v-list-item>
        <v-responsive :aspect-ratio="16/4">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-if="!pessoaFisica"
                    v-model="client.cpf"
                    :counter="11"
                    :rules="client.cpfRules"
                    label="CPF(Somente Números)"
                    ref="cpf"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-if="pessoaFisica"
                    v-model="client.cnpj"
                    :counter="14"
                    :rules="client.cnpjRules"
                    ref="cnpj"
                    label="CNPJ(Somente Números)"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.razaoSocial"
                    label="Razão Social/Nome"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.nomeFantasia"
                    label="Nome Fantasia"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-if="pessoaFisica"
                    v-model="client.ie"
                    label="IE"
                  ></v-text-field>
                  <v-text-field
                    v-if="!pessoaFisica"
                    v-model="client.rg"
                    label="RG"
                  ></v-text-field>
                </v-col>

                <v-col
                  class="d-flex"
                  cols="12"
                  sm="4"
                  >
                  <v-select
                    v-model="client.consumidorFinal"
                    :items="client.consumidorFinalItens"
                    label="Consumidor Final"
                    solo
                  ></v-select>
                </v-col>

                <v-col
                  class="d-flex"
                  cols="12"
                  sm="4"
                  >
                  <v-select
                    v-model="client.contribuinte"
                    :items="client.contribuinteItens"
                    label="Contribuite"
                    solo
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.limiteVenda"
                    :counter="11"
                    type="number"
                    label="Limite de Venda"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.email"
                    type="email"
                    label="E-mail"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
        </v-responsive>
      </v-card>
      <v-card style="margin-top: 10px">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              Endereço de Faturamento
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-responsive :aspect-ratio="16/4">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.enderecoFaturamento.rua"
                    label="Rua"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.enderecoFaturamento.numero"
                    label="Número"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.enderecoFaturamento.bairro"
                    label="Bairro"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.enderecoFaturamento.cep"
                    label="CEP"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  class="d-flex"
                  cols="12"
                  sm="4"
                  >
                  <v-select
                    v-model="client.enderecoFaturamento.cidade"
                    :items="client.cidadeItens"
                    label="Cidade"
                    solo
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
        </v-responsive>
      </v-card>
      <v-card style="margin-top: 10px">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              Endereço de Cobrança(Opicional)
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-responsive :aspect-ratio="16/4">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.enderecoCobranca.rua"
                    label="Rua"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.enderecoCobranca.numero"
                    label="Número"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.enderecoCobranca.bairro"
                    label="Bairro"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  >
                  <v-text-field
                    v-model="client.enderecoCobranca.cep"
                    label="CEP"
                    required
                  ></v-text-field>
                </v-col>

                <v-col class="d-flex" cols="12" sm="4">
                  <v-select
                    v-model="client.enderecoCobranca.cidade"
                    :items="client.cidadeItens"
                    label="Cidade"
                    solo
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
        </v-responsive>
      </v-card>
      <v-btn id="add-button" depressed color="primary" @click="addClient">Adicionar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'ClientsComponent',
    mounted() {
      this.focusCPFField()
    },
    data: () => ({
      valid: false,
      tipoCliente: false,
      client :{
        cpf: '',
        cpfRules: [
          v => !!v || 'O CPF é requerido',
          v => (v && v.length == 11) || 'O CPF deve ter pelo menos 11 caracteres',
        ],
        cnpj: '',
        cnpjRules: [
          v => !!v || 'O CNPJ é requerido',
          v => (v && v.length == 14) || 'O CNPJ deve ter pelo menos 11 caracteres',
        ],
        razaoSocial: '',
        nomeFantasia: '',
        rg: '',
        ie: '',
        consumidorFinal: '',
        contribuinte: '',
        email: '',
        enderecoFaturamento : {
          rua: '',
          bairro: '',
          numero: '',
          cep: '',
          cidade: '',
        },
        enderecoCobranca : {
          rua: '',
          bairro: '',
          numero: '',
          cep: '',
          cidade: '',
        },
        cidadeItens: ['Sim', 'Não'],
        consumidorFinalItens: ['Sim', 'Não'],
        contribuinteItens: ['Sim', 'Não'],
        limiteVenda: '',
      }
    }),
    computed: {
      pessoaFisica () {    
        return this.tipoCliente ? this.tipoCliente : false
      },
    },
    methods: {
      addClient () {
        this.client
      },
       validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      focusCPFField() {
        this.$refs.cpf.focus();
      },
    }
  }
</script>
<style>
  #add-button {
    margin-top: 10px;
  }
</style>