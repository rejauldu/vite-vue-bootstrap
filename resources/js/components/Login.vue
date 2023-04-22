<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <form @submit.prevent="submit">
                    <div class="alert alert-danger" v-if="state.error">{{ state.error }}</div>
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
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import { reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    export default {
        setup() {
            const state = reactive({
                form: {
                    email: '',
                    password: ''
                },
                errors: {
                    email: [],
                    password: []
                },
                error: ''
            })
            const router = useRouter()
            const store = useStore()
            function submit() {
                axios.post('/login', state.form)
                    .then( r => {
                        if(r.data.status === 0) {
                            state.error = r.data.message;
                        } else if (r.data.status === 1) {
                            store.dispatch('login', r.data.user)
                            router.push({name: 'dashboard'})
                        }
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