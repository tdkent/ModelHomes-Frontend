import { useEffect } from "react";

export default function Disclaimer() {
	useEffect(() => {
		document.title =
			"Privacy & Terms | Model Homes of the San Francisco International Exposition";
	}, []);
	return (
		<div className="content font-sans text-base flex flex-col gap-8">
			<header className="flex flex-col gap-4">
				<h1 className="text-2xl">Privacy & Terms</h1>
				<p>Last updated: March, 2026</p>
			</header>
			<section>
				<h2 className="text-xl">Overview</h2>
				<p>
					GGIEMH is an informational website. It does not provide user accounts,
					login functionality, or interactive features that collect personal
					information. By using this website, you agree to the terms described
					on this page.
				</p>
			</section>
			<section>
				<h2 className="text-xl">Information Collection</h2>
				<p>
					This website does not request, collect, or store personal information
					from visitors. There are no user accounts, login systems, comment
					systems, forms, or other features that request personal data.
				</p>
				<h2 className="text-xl">Technical Data and Server Logs</h2>
				<p>
					Like most websites, basic technical information may be logged
					automatically by hosting infrastructure in order to operate and secure
					the service. This may include information such as:
				</p>
				<ul className="list-disc list-inside px-4">
					<li>IP address</li>
					<li>Browser type</li>
					<li>Device information</li>
					<li>Pages requested</li>
					<li>Timestamps of requests</li>
				</ul>
				<p>
					This information is not used to personally identify visitors and is
					only used for operational and security purposes.
				</p>
				<h2 className="text-xl">Cookies</h2>
				<p>This website does not use cookies or tracking technologies.</p>
				<h2 className="text-xl">Third-Party Infrastructure</h2>
				<p>
					The site may be delivered through third-party infrastructure such as
					hosting providers, content delivery networks (CDNs), or DNS services.
					These services may collect limited technical data necessary to operate
					their systems.
				</p>
			</section>
			<section>
				<h2 className="text-xl">Content</h2>
				<p>
					The content on this website is provided for general informational
					purposes only. While reasonable effort may be made to keep information
					accurate, the site makes no guarantees regarding the completeness,
					accuracy, or timeliness of the information presented. Content may
					contain errors or become outdated.
				</p>
				<h2 className="text-xl">Image Use and Copyright</h2>
				<p>
					Images and other content displayed on this site are provided for
					informational viewing on this website only unless otherwise noted.
					Reuse, redistribution, or reproduction of images without permission
					may violate copyright or property rights.
				</p>
			</section>
			<section>
				<h2 className="text-xl">Site Availability and Bugs</h2>
				<p>
					This website is provided “as is.” The site may contain bugs or
					technical issues that may or may not be corrected. The website may be
					modified, suspended, or permanently shut down at any time and for any
					reason without notice.
				</p>
			</section>
			<section>
				<h2 className="text-xl">Limitation of Liability</h2>
				<p>
					The information and content on this website are provided for general
					informational purposes only and are offered “as is” without warranties
					of any kind, express or implied.
				</p>
				<p>
					To the fullest extent permitted by law, the operator of this website
					shall not be liable for any loss, damage, or inconvenience arising
					from the use of the site or reliance on its content. This includes,
					but is not limited to, errors or omissions in the information
					provided, temporary unavailability of the website, technical issues,
					or actions taken by visitors based on information or images presented
					on the site.
				</p>
				<p>
					Images on this website may depict private residences. The site does
					not provide property locations and does not encourage visitors to
					identify, locate, or visit these properties. The operator assumes no
					responsibility for any actions taken by visitors related to properties
					shown on the site.
				</p>
			</section>
			<section>
				<h2 className="text-xl">Changes to This Policy</h2>
				<p>
					This Privacy & Terms page may be updated or modified at any time
					without prior notice. Continued use of the site after changes are made
					constitutes acceptance of the updated terms.
				</p>
			</section>
		</div>
	);
}
