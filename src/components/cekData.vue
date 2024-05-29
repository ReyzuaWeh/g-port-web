<template>
  <div>
    <h2>Transaction Details</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div>
        <strong>ID:</strong> {{ transaction.id }}
      </div>
      <div>
        <strong>Total Price:</strong> ${{ transaction.total_price }}
      </div>
      <div>
        <strong>Created At:</strong> {{ transaction.created_at }}
      </div>
      <div>
        <strong>Updated At:</strong> {{ transaction.updated_at }}
      </div>

      <h3>Items:</h3>
      <ul>
        <li v-for="(item, index) in transaction.items" :key="index">
          <div>
            <strong>Item Name:</strong> {{ item.item_name }}
          </div>
          <div>
            <strong>Quantity:</strong> {{ item.quantity }}
          </div>
          <div>
            <strong>Price:</strong> ${{ item.price }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            loading: true,
            transaction: {
                total_price: 0,
                items: []
            }
        };
    },
    mounted() {
        const url = 'https://gjar-backendini.000webhostapp.com/api/transaksi/5';
        axios.get(url).then(response => {
            console.log(response.data.item);
            this.transaction = {
                id: response.data.id,
                total_price: response.data.total_price,
                created_at: response.data.created_at,
                updated_at: response.data.updated_at,
                items: response.data.item // Assign items dari response ke transaction.items
            };
            console.log(this.transaction.item);
            this.loading = false;
        }).catch(error => {
            console.error('Error : ', error)
            this.loading = false;
        });
    }
}
</script>