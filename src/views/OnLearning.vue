<template>
    <div class="routeDesign">
        <h2 class="text-3xl md:text-5xl font-semibold text-indigo-500 mb-6">Learning</h2>
        <div class="w-full flex flex-wrap justify-start">
            <div class="card m-3" style="width: 18rem;">
                <img src="../assets/express.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Express JS</h5>
                    <p class="card-text">In progress...</p>
                </div>
            </div>
            <div class="card m-3" style="width: 18rem;">
                <img src="../assets/mongodb.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">MongoDB</h5>
                    <p class="card-text">In progress...</p>
                </div>
            </div>
            <div class="card m-3" style="width: 18rem;">
                <img src="../assets/sqlite.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">SQLite</h5>
                    <p class="card-text">In progress...</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppOnLearning',
}
</script>
<style scoped>
.card {
    padding-top: 15px;
    transition: all 0.5s ease-in-out;
    flex-grow: 1;
    background-color: rgb(243 244 246);
}

.card:hover {
    box-shadow: 0px 0px 25px 15px rgba(12, 199, 165, 0.55);
    -webkit-box-shadow: 0px 0px 25px 15px rgba(12, 199, 165, 0.55);
    -moz-box-shadow: 0px 0px 25px 15px rgba(12, 199, 165, 0.55);
}

.routeDesign {
    padding: auto;
    margin: 0%;
    margin-top: auto;
    border-radius: 0%
}

.card-title {
    font-size: 18px;
    font-weight: bold;
}

.card-body {
    padding: auto;
}

.card-img-top {
    max-width: 40%;
    margin: 0 auto;
    margin-bottom: 2;
    border-radius: 4px;
}
</style>