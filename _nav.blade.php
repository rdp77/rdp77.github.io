<div class="navbar navbar-dark navbar-expand-md fixed-top">
        <div class="navbar-brand">
            <a href="{{ route('homepage') }}" class="d-inline-block">
                <img src="{{ asset('assets_backend/images/logo_light.png') }}" alt="">
            </a>
        </div>

        <div class="d-md-none">
            <button class="navbar-toggler" type="button" data-toggle="dropdown" data-target="#navbar-mobile" onclick="notifications()">
                <i class="icon-bubbles4"></i>
            </button>
            <button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
                <i class="icon-paragraph-justify3"></i>
            </button>
        </div>

        <div class="collapse navbar-collapse" id="navbar-mobile">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                        <i class="icon-paragraph-justify3"></i>
                    </a>
                </li>
               <div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
                    <div class="dropdown-content-header">
                    </div>
    
                    <div class="dropdown-content-body dropdown-scrollable">
                        <ul class="media-list" >
                        </ul>
                    </div>
    
                    <div class="dropdown-content-footer justify-content-center p-0">
                        <a href="#" class="bg-light text-grey w-100 py-2" data-popup="tooltip" title="Load more"><i class="icon-menu7 d-block top-0"></i></a>
                    </div>
                </div>
            </ul>

            <span class="badge bg-primary ml-md-3 mr-md-auto d-none d-md-block" style="padding: 10px;border-radius:unset;font-size: 13px">{{ date('d F Y') }} <span class="digital-clock"></span></span>
          
            <div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
                <div class="dropdown-content-header">
                    <span class="font-weight-semibold">Notifikasi</span>
                </div>

                <div class="dropdown-content-body dropdown-scrollable">
                    <ul class="media-list" >
                    </ul>
                </div>

                <div class="dropdown-content-footer justify-content-center p-0">
                    <a href="#" class="bg-light text-grey w-100 py-2" data-popup="tooltip" title="Load more"><i class="icon-menu7 d-block top-0"></i></a>
                </div>
            </div>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="navbar-nav-link dropdown-toggle caret-0 justify-content-center" onclick="notifications()" data-toggle="dropdown">
                        <i class="icon-bubbles4"></i>
                        <span class="d-md-none ml-2">Notifikasi</span>
                        {{-- <span class="badge badge-pill bg-warning-400 ml-auto ml-md-0">2</span> --}}
                    </a>
                    
                    <div class="dropdown-menu dropdown-menu-right dropdown-content wmin-md-350">
                        <div class="dropdown-content-header">
                            <span class="font-weight-semibold">Notifikasi</span>
                        </div>

                        <div class="dropdown-content-body dropdown-scrollable">
                            <ul class="media-list" >
                            </ul>
                        </div>

                        <div class="dropdown-content-footer justify-content-center p-0">
                            <a href="#" class="bg-light text-grey w-100 py-2" data-popup="tooltip" title="Load more"><i class="icon-menu7 d-block top-0"></i></a>
                        </div>
                    </div>
                </li>

{{--                 <li class="nav-item dropdown dropdown-user">
                    <a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
                        <img class="rounded-circle mr-2" height="34" alt=""
                        @if (Auth::user()->m_image == null || Auth::user()->m_image == '')
                            src="{{ asset('assets_frontend/img/core-img/img_kosong.jpg') }}"
                        @else
                            src="{{ asset('storage/app/'.Auth::user()->m_image ) }}"
                        @endif>
                        <span>{{ Auth::user()->m_name }}</span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <a href="{{ route('user_profile',['id'=>Auth::user()->m_id]) }}" class="dropdown-item"><i class="icon-user-plus"></i> My profile</a>
                        <a href="#" class="dropdown-item"><i class="icon-coins"></i> My balance</a>
                        <a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Messages <span class="badge badge-pill bg-blue ml-auto">58</span></a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item"><i class="icon-cog5"></i> Account settings</a>
                        <a class="dropdown-item" href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();" ><i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </div> 
                </li> --}}
            </ul>
        </div>
    </div>
