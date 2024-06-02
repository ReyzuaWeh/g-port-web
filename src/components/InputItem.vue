<template>
    <div>
        <h1>Transaction Form</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label>Total Price:</label>
                <input type="number" v-model="transaction.total_price" step="0.01" required />
            </div>
            <h2>Items</h2>
            <div v-for="(item, index) in transaction.items" :key="index">
                <label>Item Name:</label>
                <input type="text" v-model="item.item_name" required />
                <label>Quantity:</label>
                <input type="number" v-model="item.quantity" required />
                <label>Price:</label>
                <input type="number" v-model="item.price" step="0.01" required />
                <button @click.prevent="removeItem(index)">Remove Item</button>
            </div>
            <button @click.prevent="addItem">Add Item</button>
            <button type="submit">Submit</button>
        </form>
        <a href="https://gjar-backendini.000webhostapp.com/api/transaksi/5" target="_blank">Cek Transaksi 5</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transaction: {
                total_price: 0,
                items: [
                    { item_name: '', quantity: 1, price: 0 }
                ]
            }
        };
    },
    methods: {
        addItem() {
            this.transaction.items.push({ item_name: '', quantity: 1, price: 0 });
        },
        removeItem(index) {
            this.transaction.items.splice(index, 1);
        },
        async submitForm() {
            console.log('Submitting transaction:', this.transaction);
            try {
                const response = await fetch('https:/project.tatsuya.tech/api/transaksi', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(this.transaction)
                    });
                if (response.status === 200 || response.status === 201) {
                    alert('Transaction created successfully!');
                    // Reset the form
                    this.transaction = {
                        total_price: 0,
                        items: [{ item_name: '', quantity: 1, price: 0 }],
                    };
                } else {
                    console.error('Error response:', response.data);
                    alert(`Error: ${response.data.message}`);
                }
                // const response = await axios({
                //     method: 'post',
                //     url: 'https://gjar-backendini.000webhostapp.com/api/transaksi',
                //     data: this.transaction,
                //     headers: {
                //         'Content-Type': 'application/json'
                // }
                // });
                // if (response.status === 200 || response.status === 201) {
                // alert('Transaction created successfully!');
                // // Reset the form
                // this.transaction = {
                //     total_price: 0,
                //     items: [{ item_name: '', quantity: 1, price: 0 }],
                // };
                // } else {
                // console.error('Error response:', response.data);
                // alert(`Error: ${response.data.message}`);
                // }
            } catch (error) {
                console.error('Fetch error:', error);
                console.error('Error message:', error.message);
                alert('Error creating transaction: ' + error.message);
            }
        }
    }
};
</script>

<style scoped>
form div {
    margin-bottom: 1rem;
}
</style>
