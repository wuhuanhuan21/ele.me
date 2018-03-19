<template>
	<div>
		<aside class="control-sidebar control-sidebar-dark">
    <!-- Create the tabs -->
	    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
	      <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
	      <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
	    </ul>
	    <!-- Tab panes -->
	    <div class="tab-content">
	      <!-- Home tab content -->
	      <div class="tab-pane active" id="control-sidebar-home-tab">
	        <h3 class="control-sidebar-heading">近期活动</h3>
	        <ul class="control-sidebar-menu">
	          <li>
	            <a href="javascript::;">
	              <i class="menu-icon fa fa-birthday-cake bg-red"></i>

	              <div class="menu-info">
	                <h4 class="control-sidebar-subheading">Langdon 的生日</h4>

	                <p>Will be 23 on April 24th</p>
	              </div>
	            </a>
	          </li>
	        </ul>
	        <!-- /.control-sidebar-menu -->

	        <h3 class="control-sidebar-heading"> 任务进度</h3>
	        <ul class="control-sidebar-menu">
	          <li>
	            <a href="javascript::;">
	              <h4 class="control-sidebar-subheading">
	                 自定义模板设计
	                <span class="pull-right-container">
	                  <span class="label label-danger pull-right">70%</span>
	                </span>
	              </h4>

	              <div class="progress progress-xxs">
	                <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
	              </div>
	            </a>
	          </li>
	        </ul>
	        <!-- /.control-sidebar-menu -->

	      </div>
	      <!-- /.tab-pane -->
	      <!--  统计信息选项卡内容 -->
	      <div class="tab-pane" id="control-sidebar-stats-tab"> 统计信息选项卡内容</div>
	      <!-- /.tab-pane -->
	      <!-- Settings tab content -->
	      <div class="tab-pane" id="control-sidebar-settings-tab">
	        <form method="post">
	          <h3 class="control-sidebar-heading">常规设置项</h3>

	          <div class="form-group">
	            <label class="control-sidebar-subheading">
	              报告面板用法
	              <input type="checkbox" class="pull-right" checked>
	            </label>

	            <p>
	             常规设置选项的相关信息
	            </p>
	          </div>
	          <!-- /.form-group -->
	        </form>
	      </div>
	      <!-- /.tab-pane -->
	    </div>
	  </aside>
	</div>
</template>>