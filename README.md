<h1>Step 1:</h1>
<p>Install laravel</p>
<pre><blockquote>
composer create-project laravel/laravel vite-vue-bootstrap
</blockquote></pre>
<p>Change CLI directory to <code>vite-vue-bootstrap</code></p>
<pre><blockquote>
cd vite-vue-bootstrap
</blockquote></pre>
<p>Now, install the following packages:</p>
<pre><blockquote>
npm install bootstrap
npm install vue
npm install @vitejs/plugin-vue --save-dev
npm install sass
</blockquote></pre>
<ul>
<li>Update the <code>vite.config.js</code></li>
<li>Create <code>resources/sass/app.scss</code> and <code>resources/sass/_variables.scss</code></li>
<li>Update <code>resources/js/app.js</code> and <code>resources/js/bootstrap.js</code></li>
<li>Include assets in blade files</li>
</ul>
<p>Done!</p>
<h2>Step: 2</h2>
<p>Install <code>vue-router</code></p>
<pre><blockquote>
npm install vue-router</pre></blockquote>
<h3>Sanctum</h3>
<p>Now, execute the following commands:</p>
<pre><blockquote>
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
</blockquote></pre>
<p>you should add Sanctum's middleware to your api middleware group within your application's <code>app/Http/Kernel.php</code> file:</p>
<pre><blockquote>
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    \Illuminate\Routing\Middleware\ThrottleRequests::class.':api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
</blockquote></pre>
<p>Set the supports_credentials option within your application's config/cors.php configuration file to true.</p>
<p>Now, add in your <code>resources/js/bootstrap.js</code> file</p>
<pre><blockquote>
axios.defaults.withCredentials = true;
</blockquote></pre>
<p>Finally, you should add in your <code>.env</code> file</p>
<pre><blockquote>
SESSION_DOMAIN = spa
SANCTUM_STATEFUL_DOMAINS = spa
</blockquote></pre>
<p><b>Note:</b></p>
<ul>
<li>Notice logout function is different for sanctum</li>
<li>Notice middleware for sanctum</li>
</ul>