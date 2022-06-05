<template>
    <v-app>
        <div style="
            background: #E8E7F2;
            background: -webkit-linear-gradient(to right, #E8E7F2, #FFF, #E8E7F2);
            background: linear-gradient(to right, #E8E7F2, #FFF, #E8E7F2);
            ">
            <v-breadcrumbs
            :items="items"
            divider="-"
            ></v-breadcrumbs>
        </div>
        <v-main style="border-top: 1px solid #d7d7d7; padding-top: 5px">
            <bar-component/>
            <clients-component />
        </v-main>
    </v-app>
</template>

<script>
  import BarComponent from '../components/BarComponent'
  import ClientsComponent from '../components/ClientsComponent'

  export default {
    name: 'Clients',
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/home',
        },
        {
          text: 'Clientes',
          disabled: true,
          href: '/clients',
        },
      ],
    }),
    components: {
        BarComponent,
        ClientsComponent,
    },
  }
</script>
