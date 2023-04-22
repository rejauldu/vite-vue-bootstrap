<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <div class="card-body">
                <form @submit.prevent="submit">
                    <div class="mb-3 mt-3">
                        <label for="name" class="form-label">Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="state.form.name" required>
                        <div class="small text-danger" v-if="state.errors['name']">{{ state.errors['name'][0] }}</div>
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="state.form.email" required>
                        <div class="small text-danger" v-if="state.errors['email']">{{ state.errors['email'][0] }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password:</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="state.form.password" required>
                        <div class="small text-danger" v-if="state.errors['password']">{{ state.errors['password'][0] }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="confirm-password" class="form-label">Confirm Password:</label>
                        <input type="password" class="form-control" id="confirm-password" placeholder="Enter password" v-model="state.form.password_confirmation" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import { reactive } from 'vue'
    export default {
        setup() {
            const state = reactive({
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: {
                    name: [],
                    email: [],
                    password: []
                }
            })
            function submit() {
                axios.post('/register', state.form)
                    .then( res => {
                        console.log(res.data)
                    })
                    .catch(e => {
                        if (e.response.status === 422) {
                            state.errors = e.response.data.errors
                        }
                    });
            }
            return {
                state,
                submit
            }
        }
    }
</script>