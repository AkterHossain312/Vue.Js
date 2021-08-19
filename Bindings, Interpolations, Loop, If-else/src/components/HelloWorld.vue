<template>
<h1>{{msg}}</h1>
  <section id="events">
      <h2>Events in Action</h2>
      <button @click="add(10)">Add 10</button>
      <button v-on:click="reduce(5)">Subtract 5</button>
      <input type="text" v-on:input="setName($event)">
      <p>Result: {{ counter }} your Name: {{name}}</p>
      <input type="text" v-model="name">
      <!-- <button v-on:click="resetInput">Reset Input</button> -->
      <p>Your Name: {{ name }}</p>
      <p>Learn More <a v-bind:href="link"> About Vue</a></p>

      <form v-on:submit.prevent="submitForm">
        <input type="text">
        <button>Sign up </button>
     </form>
     <p>{{fullname}}</p>
    </section>

    
      <h2>Data showing by loops</h2>
      <input type="text" v-model="enteredGoalValue" />
      <button @click="addGoal">Add</button>
      <p v-if="goals.length === 0">
        No goals have been added yet - please start adding some!
      </p>
      <ul v-else>
        <li v-for="(goal, index) in goals" :Key="goal">{{ goal }} - {{ index }}</li>
      </ul>

     
      <!-- <ul>
        <li v-for="num in 10">{{ num }}</li>
      </ul> -->
      <!-- <ul>
        <li v-for="(value, key, index) in {name: 'Max', age: 31}">{{ key }}: {{ value }} - {{ index }}</li>
      </ul> -->
    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      counter: 0,
      name: '',
      link:'https://kaz.com.bd/',
      fullName:' ',
      enteredGoalValue: '',
      goals: []
    };
  },
  methods: {
    submitForm()
      {
          alert('Submitted')
      }
    ,
    setName(event) {
      console.log('Running method...')
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    }
  },
  computed:
  {
    fullname()
    {
      console.log('Running Program...');
      if(this.name===''){
        return ''
      }
      return this.name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
