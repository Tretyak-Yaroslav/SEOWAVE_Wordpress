<?php
$dbhandler = new PM_DBhandler;
$pmrequests = new PM_request;
$path =  plugin_dir_url(__FILE__);
$identifier = 'SETTINGS';
if(filter_input(INPUT_POST,'submit_settings'))
{
	$retrieved_nonce = filter_input(INPUT_POST,'_wpnonce');
	if (!wp_verify_nonce($retrieved_nonce, 'save_woocommerce_settings' ) ) die( 'Failed security check' );
	$exclude = array("_wpnonce","_wp_http_referer","submit_settings");
	  if(!isset($_POST['pm_enable_woocommerce'])) $_POST['pm_enable_woocommerce'] = 0;
          if(!isset($_POST['pm_enable_prefix'])) $_POST['pm_enable_prefix'] = 0;
          if(!isset($_POST['pm_enable_postfix'])) $_POST['pm_enable_postfix'] = 0;
	$post = $pmrequests->sanitize_request($_POST,$identifier,$exclude);
	if($post!=false)
	{
		foreach($post as $key=>$value)
		{
			$dbhandler->update_global_option_value($key,$value);
		}
	}
	
	wp_redirect('admin.php?page=pm_settings');exit;
}
?>

<div class="uimagic">
  <form name="pm_woocommerce_settings" id="pm_woocommerce_settings" method="post">
    <!-----Dialogue Box Starts----->
    <div class="content">
      <div class="uimheader">
        <?php _e( 'WooCommerce Integration','profilegrid-woocommerce' ); ?>
      </div>
     
      <div class="uimsubheader">
        <?php
		//Show subheadings or message or notice
		?>
      </div>
    
        <div class="uimrow">
        <div class="uimfield">
          <?php _e( 'Enable WooCommerce Integration','profilegrid-woocommerce' ); ?>
        </div>
        <div class="uiminput">
           <input name="pm_enable_woocommerce" id="pm_enable_woocommerce" type="checkbox" <?php checked($dbhandler->get_global_option_value('pm_enable_woocommerce','0'),'1'); ?> class="pm_toggle" value="1" style="display:none;" onClick="pm_show_hide(this,'pm_woocommerce_html')" />
          <label for="pm_enable_woocommerce"></label>
        </div>
        <div class="uimnote"><?php _e("Turns on WooCommerce connection with ProfileGrid",'profilegrid-woocommerce');?></div>
      </div>
        
    
        
 
      <div class="buttonarea"> 
          <a href="admin.php?page=pm_settings">
        <div class="cancel">&#8592; &nbsp;
          <?php _e('Cancel','profilegrid-woocommerce');?>
        </div>
        </a>
        <?php wp_nonce_field('save_woocommerce_settings'); ?>
        <input type="submit" value="<?php _e('Save','profilegrid-woocommerce');?>" name="submit_settings" id="submit_settings" />
        <div class="all_error_text" style="display:none;"></div>
      </div>
    </div>
   
  </form>
</div>