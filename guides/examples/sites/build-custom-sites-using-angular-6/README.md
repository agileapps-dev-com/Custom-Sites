<h1>Using Angular 6 framework to build custom sites in AgileApps</h1>
<p>Can we develop AgileApps Site using angular 6 ? The answer is well yes, we can! In this article, we will see how to build AgileApps sites with Angular 6+. Towards the end of the article there is a link provided to a sample application.</p>

<h2>Requirements</h2>

<p>I assume that the reader of this article has a good understanding of <a href="https://v6.angular.io/docs" target="_blank">Angular 6</a> and how it works, especially creating an app, <a href="https://v6.angular.io/tutorial/toh-pt5" target="_blank">routing</a>, "Activate Guard",&nbsp;building, publishing an app using <a href="https://cli.angular.io/" target="_blank">Angular CLI</a>&nbsp;. You will also need to have knowledge on the <a href="http://agileappscloud.info/wiki/Sites#About_Sites" target="_blank">AgileApps Sites</a> features and <a href="http://agileappscloud.info/wiki/Sites#Anonymous_Site_User" target="_blank">anonymous site user</a>&nbsp;feature. It's also recommended to have some knowledge on Single Page Apps concepts.</p>

<ol>
	<li>AgileApps Platform 10.11.3+</li>
	<li>Angular 6 &amp; compatible Angular CLI version.</li>
	<li><a href="https://getbootstrap.com/" target="_blank">Bootstrap framework 4</a>+ &amp; <a href="https://ng-bootstrap.github.io/#/getting-started" target="_blank">Angular bootstrap components</a>&nbsp;(Optional)</li>
</ol>

<h2>Challenges</h2>

<p>While using&nbsp;Angular framework to create an&nbsp;AgileApps site, some of the most common challenges are as follows:</p>

<ul>
	<li>AgileApps Sites are not Single Page App (SPA), while Angular framework is!</li>
	<li>How do we host the Angular artifacts within Agileapps platform?</li>
	<li>Is it possible to have the <a href="http://agileappscloud.info/wiki/Sites#Anonymous_Site_User" target="_blank">Anonymous user access</a> configurations while using Angular?</li>
</ul>

<h2>Getting started</h2>

<p>Firstly, we will create an Angular application which is compatible with AgileApps Sites capability. Then, deploy&nbsp;the same app in the AgileApps Sites using the <a href="http://agileappscloud.info/aawiki/index.php/Static_Resources#Compressed_Files" target="_blank">Compressed files in static resources</a>.</p>

<h3>Create Angular App</h3>

<p>Use Angular CLI&nbsp;to create an angular 6 App (<code>my-angular-site</code>). Include your choice of css framework (In this article, we use the bootstrap and Angular Bootstrap components). Then, create required routes as per the requirement (You can have unlimited number of urls/routes of your choice). keep the following points in mind:</p>

<ol>
	<li>Routing:<br />
	<strong><a href="https://angular.io/api/router/ExtraOptions#useHash" target="_blank">Use Hash</a> strategy </strong>:&nbsp;Enables the location strategy that uses the URL fragment instead of the history API.&nbsp;<br />
	Remove the&nbsp;&lt;base href="." /&gt; element from the index.html&nbsp;</li>
	<li><a href="https://angular.io/guide/lazy-loading-ngmodules" target="_blank">Lazy loading of feature module</a> is not supported. Hence all modules need to be eagerly loaded.</li>
	<li>Building the app:<br />
	Prepare the app for deployment, use angular cli to perform the production build. Create a <span style="font-family: &quot;Courier New&quot;, &quot;Source Code Pro&quot;, &quot;PT Mono&quot;; white-space: pre;">my-angular-site.zip</span>&nbsp;file with the "dist" (Prodction build artifacts).</li>
</ol>

<div class="portlet-msg-info">Note: since the Angular is an SPA, you need to manually create all the pages including login page. The access to the authenticated pages has to be implemented using the Angular CanActivate guard.</div>

<h3>Create the AgileApps Site</h3>

<p>Follow these guidelines while creating an AgileApps Site to be used along with angular framework:</p>

<ol>
	<li>Create a jsp&nbsp;Page under "Developer Resources » Pages". eg: <code>home.jsp</code></li>
	<li>Upload the "<span style="font-family: &quot;Courier New&quot;, &quot;Source Code Pro&quot;, &quot;PT Mono&quot;; white-space: pre;">my-angular-site.zip</span>" into "Developer Resources » Static Resources".</li>
	<li>
	<p>Copy the <code>index.html</code> (present inside the <span style="font-family: &quot;Courier New&quot;, &quot;Source Code Pro&quot;, &quot;PT Mono&quot;; white-space: pre;">my-angular-site.zip</span>) contents into <code>home.jsp. Make the below changes to the script &amp; css paths.<br />
	<br />
	<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">link</span> <span style="color: #9cdcfe;">rel</span>=<span style="color: #ce9178;">"stylesheet"</span> <span style="color: #9cdcfe;">href</span>=<span style="color: #ce9178;">'</span><span style="color: #f44747;">&lt;</span><span style="color: #ce9178;">lj:resource name="my-angular-site" path="/styles.3ff695c00d717f2d2a11.css"/&gt;'</span><span style="color: #808080;">&gt;&lt;/</span><span style="color: #569cd6;">head</span><span style="color: #808080;">&gt;</span><br />
	<span style="color: #808080;">&lt;</span><span style="color: #569cd6;">script</span> <span style="color: #9cdcfe;">type</span>=<span style="color: #ce9178;">"text/javascript"</span> <span style="color: #9cdcfe;">src</span>=<span style="color: #ce9178;">'</span><span style="color: #f44747;">&lt;</span><span style="color: #ce9178;">lj:resource name="my-angular-site" path="/runtime.ec2944dd8b20ec099bf3.js"/&gt;'</span><span style="color: #808080;">&gt;</span><span style="color: #808080;">&lt;</span><span style="color: #808080;">/</span><span style="color: #569cd6;">script</span><span style="color: #808080;">&gt;</span></code></p>
	</li>
	<li>
	<p>Insert&nbsp;<code><span style="color: #f44747;">&lt;</span>%@taglib prefix="lj" uri="/LJTagLib"%&gt;</code>&nbsp;before the <code>index.html</code> contents, inside the <code>home.jsp</code>.</p>
	</li>
	<li>
	<p>Create a new Site &nbsp;"<span style="color: rgb(70, 70, 70); font-family: &quot;Open Sans&quot;, sans-serif; font-size: 12px; white-space: nowrap;">myAngularSite&nbsp;</span>". and choose '<code>home.jsp</code>' as the start page and configure other required parameters.</p>
	</li>
</ol>

<p>Now, the site is ready for use.</p>

<h2>Anonymous user Access</h2>

<p>The anonymous user access feature will work, as long as the site is accessed from 'https://{{hostname}}/networking/sites/{{tenantId}}/{{SiteName}}' path. If&nbsp;the Angular app is not authenticated, this site will work with the configured anonymous user access privileges. Since Angular is an SPA, the pages to perform login has to be implemented in the angular app itself. All the authentication required pages should be guarded using the CanActivate guard in angular as a part of the corresponding Angular Route definition.&nbsp;</p>

<h2>Notes</h2>

<ul>
	<li>Re-publishing the angularApp would require the developer to replace the "<span style="font-family: &quot;Courier New&quot;, &quot;Source Code Pro&quot;, &quot;PT Mono&quot;; white-space: pre;">my-angular-site.zip</span>" contents inside "static resources", and make necessary changes to the 'path' references in <code>home.jsp </code>as required.</li>
	<li>The Sample AngularSite App can be downloaded from here <a href="https://github.com/agileapps-dev-com/Custom-Sites/tree/master/guides/examples/sites/build-custom-sites-using-angular-6" target="_blank">https://github.com/agileapps-dev-com/Custom-Sites/tree/master/guides/examples/sites/build-custom-sites-using-angular-6</a>.</li>
</ul>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>
