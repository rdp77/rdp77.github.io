<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">

			<!-- Sidebar mobile toggler -->
			<div class="sidebar-mobile-toggler text-center">
				<a href="#" class="sidebar-mobile-main-toggle">
					<i class="icon-arrow-left8"></i>
				</a>
			</div>
			<!-- /sidebar mobile toggler -->


			<!-- Sidebar content -->
			<div class="sidebar-content">

				<!-- User menu -->
				<div class="sidebar-user">
					<div class="card-body">
						<div class="media">
							<div class="mr-3">
								<a href="#"><img class="rounded-circle mr-2" height="34" alt=""
			                        @if (Auth::user()->m_image == null || Auth::user()->m_image == '')
			                            src="{{ asset('assets_frontend/img/core-img/img_kosong.jpg') }}"
			                        @else
			                            src="{{ asset('storage/app/'.Auth::user()->m_image ) }}"
			                        @endif width="38" height="38" class="rounded-circle" alt=""></a>
							</div>

							<div class="media-body">
								<div class="media-title font-weight-semibold">{{ Auth::user()->m_name }}</div>
								<div class="font-size-xs opacity-50">
									<i class="icon-pin font-size-sm"></i> &nbsp;{{ Auth::user()->m_city }}
								</div>
							</div>

							<div class="ml-3 align-self-center">
								<a href="#" class="text-white"><i class="icon-cog3"></i></a>
							</div>
						</div>
					</div>
				</div>
				<!-- /user menu -->


				<!-- Main navigation -->
				<div class="card card-sidebar-mobile">
					<ul class="nav nav-sidebar" data-nav-type="accordion">
						<!-- Master -->
						@if (Auth::user()->m_role == 'admin')
							{{-- expr --}}
						<li class="nav-item-header"><div class="text-uppercase font-size-xs line-height-xs">Master</div> <i class="icon-menu" title="Main"></i></li>
						<li class="nav-item">
							<a href="{{ route('user') }}" 
							class="nav-link {{ Request::is('master/user') ? 'active' : '' }}">
								<i class="icon-users"></i>
								<span>
									User
								</span>
							</a>
						</li>
						<li class="nav-item nav-item-submenu 
						{{
                    	  Request::is('master/category/*') ? 'nav-item-open' : ''

                    	}}">
							<a href="#" 
							class="nav-link 
							{{ 
								Request::is('master/category_event') ? 'active' : '' ||
								Request::is('master/category_news') ? 'active' : '' 
							}}">
							<i class="icon-copy"></i> <span>Kategori</span></a>
							<ul class="nav nav-group-sub" 
							data-submenu-title="Layouts" 
							style="display:
							{{ 
								Request::is('master/category_event') ? 'block' : '' || 
								Request::is('master/category_news') ? 'block' : ''
							}}">
								<li class="nav-item"><a href="{{ route('category_event') }}" 
									class="nav-link {{ Request::is('master/category_event') ? 'active' : '' }}">Kategori Event</a></li>
								<li class="nav-item"><a href="{{ route('category_news') }}" 
									class="nav-link {{ Request::is('master/category_news') ? 'active' : '' }}">Kategori Berita</a></li>
							</ul>
						</li>
						<li class="nav-item nav-item-submenu 
						{{
                    	  Request::is('master/setting/*') ? 'nav-item-open' : ''

                    	}}">
							<a href="#" 
							class="nav-link 
							{{ 
								Request::is('master/setting_carousel') ? 'active' : '' 
							}}">
							<i class="icon-copy"></i> <span>Setting </span></a>
							<ul class="nav nav-group-sub" 
							data-submenu-title="Layouts" 
							style="display:
							{{ 
								Request::is('master/setting_carousel') ? 'block' : '' 
							}}">
								<li class="nav-item"><a href="{{ route('setting_carousel') }}" 
									class="nav-link {{ Request::is('master/setting_carousel') ? 'active' : '' }}">Slider</a></li>
							</ul>
						</li>
						@endif
						
						
						<!-- Mani -->
						<li class="nav-item-header"><div class="text-uppercase font-size-xs line-height-xs">Main</div> <i class="icon-menu" title="Forms"></i></li>
						<li class="nav-item">
							<a href="{{ route('homepage') }}" class="nav-link">
								<i class="icon-home4"></i>
								<span>
									Homepage
								</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="{{ route('main_shop') }}" class="nav-link">
								<i class="icon-home4"></i>
								<span>
									Toko
								</span>
							</a>
						</li>
						<li class="nav-item nav-item-submenu
						{{
                    	  Request::is('main/*') ? 'nav-item-open' : ''
                    	}}">
							<a href="#" class="nav-link
							{{ 
								Request::is('main/main_event') ? 'active' : '' ||
								Request::is('main/main_puisi') ? 'active' : '' ||
								Request::is('main/main_news') ? 'active' : '' 
							}}">
							<i class="icon-insert-template"></i> <span>Main Event/Berita</span></a>
							<ul class="nav nav-group-sub" data-submenu-title="Form layouts"
							style="display:
							{{ 
								Request::is('main/main_event') ? 'block' : '' || 
								Request::is('main/main_event/create') ? 'block' : '' || 
								Request::is('main/main_event/edit') ? 'block' : '' || 
								Request::is('main/main_puisi') ? 'block' : '' || 
								Request::is('main/main_puisi/create') ? 'block' : '' || 
								Request::is('main/main_puisi/edit') ? 'block' : '' || 
								Request::is('main/main_news') ? 'block' : '' ||
								Request::is('main/main_news/create') ? 'block' : ''  ||
								Request::is('main/main_news/edit') ? 'block' : ''  
							}}">
								<li class="nav-item"><a href="{{ route('main_event') }}" 
									class="nav-link {{ Request::is('main/main_event') ? 'active' : '' }}">Event</a></li>
								<li class="nav-item"><a href="{{ route('main_puisi') }}" 
									class="nav-link {{ Request::is('main/main_puisi') ? 'active' : '' }}">Puisi</a></li>
								<li class="nav-item"><a href="{{ route('main_news') }}" 
									class="nav-link {{ Request::is('main/main_news') ? 'active' : '' }}">Berita</a></li>
							</ul>
						</li>
						<li class="nav-item-header"><div class="text-uppercase font-size-xs line-height-xs">Account</div> <i class="icon-menu" title="Account"></i></li>
						<li class="nav-item">
							<a href="{{ route('user_profile',['id'=>Auth::user()->m_id]) }}" class="nav-link">
								<i class="icon-user-plus"></i>
								<span>
									My Profile
								</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link">
								<i class="icon-cog5"></i>
								<span>
									Account Settings
								</span>
							</a>
						</li>
						<li class="nav-item">
							<a href="{{ route('logout') }}"
							onclick="event.preventDefault();
							document.getElementById('logout-form').submit();" class="nav-link">
								<i class="fa fa-power-off m-r-5 m-l-5"></i>
								<span>
									Logout
								</span>
							</a>
							<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
								{{ csrf_field() }}
							</form>
						</li>
					</ul>
				</div>
			</div>
			<!-- /sidebar content -->
			
		</div>
