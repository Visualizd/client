<template>
    <div style="background-color: lightgray">
        
        <div>
            <div class="Row">
                <div class="Column">   
                    <div style="width: 50px"></div>
                </div>
                
                <div class="Column">
                    <h5 style="text-align: left">Overview</h5>
                    <h4 style="text-align: left">Dashboard</h4>
                </div>

                <div class="Column">
                    <b-container fluid>
                        <b-row>
                            <b-col>
                                <b-card-group deck>
                                    <b-card title="Projects" style="max-width: 30rem; text-align: left">
                                        <b-card-group deck>
                                            <b-card title="Project 1" style="max-width: 15rem; text-align: left">
                                                <b-card-text>Header and footers using props.</b-card-text>
                                                <b-button href="#" variant="primary">Go somewhere</b-button>
                                            </b-card>

                                            <b-card title="Project 2" style="max-width: 15rem; text-align: left">
                                            <b-card-text>Header and footers using slots.</b-card-text>
                                                <b-button href="#" variant="primary">Go somewhere</b-button>
                                            </b-card>
                                        </b-card-group>
                                        <div style="height: 10px"></div>
                                        <b-button pill variant="outline-primary" style="text-align: right">More...</b-button>
                                    </b-card>
                                </b-card-group>
                            </b-col>
                            <b-col>
                            <b-card-group deck>
                                    <b-card title="Datasets" style="max-width: 30rem; text-align: left">
                                        <b-card-group deck>
                                            <b-card title="Dataset 1" style="max-width: 15rem; text-align: left">
                                                <b-card-text>Header and footers using props.</b-card-text>
                                                <b-button href="#" variant="primary">Go somewhere</b-button>
                                            </b-card>

                                            <b-card title="Dataset 2" style="max-width: 15rem; text-align: left">
                                            <b-card-text>Header and footers using slots.</b-card-text>
                                                <b-button href="#" variant="primary">Go somewhere</b-button>
                                            </b-card>
                                        </b-card-group>
                                        <div style="height: 10px"></div>
                                        <b-button pill variant="outline-primary" style="text-align: right">More...</b-button>
                                    </b-card>
                                </b-card-group>
                            </b-col>
                            <b-col>
                                <div style="width=40px"></div>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data() {
      return {
        variant: 'dark',
      }
    }
}
</script>

<style scoped>

#App {
    display: absolute;
}

sidebar-menu {
    position: static
}

h1 {
    text-align: left
}

.Row {
    display: table;
    width: 100%; /*Optional*/
    table-layout: fixed; /*Optional*/
    border-spacing: 10px; /*Optional*/
}
.Column {
    /* display: table-cell; */
}

.wrapper {
    display: flex;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
}

#sidebar.active {
    margin-left: -250px;
}

</style>