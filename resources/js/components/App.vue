<script>
    import { useStore } from 'vuex'
    const app = {
        setup() {
            const store = useStore();
            function getUser() {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.get('/user')
                        .then((r) => {
                            if(r.data.status === 1) {
                                store.dispatch('setUser', r.data.user);
                            } else {
                                store.dispatch('logout')
                            }
                        })
                });
            }
            getUser()
            return {
                getUser,
            }
        }
    }
    export default app;
</script>