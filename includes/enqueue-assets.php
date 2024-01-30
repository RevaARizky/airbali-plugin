<?php
/**
 * Enqueue CSS & JS for custom slider
 */

add_action('wp_enqueue_scripts', function () {

    /** Register custom CSS */
    $styleName = 'elementor-style-custom';
    wp_register_style("$styleName-carousel", additional_blocks_assets_url('/dist/carousel.css'), [], null);
    wp_register_style("$styleName-gallery", additional_blocks_assets_url('/dist/gallery.css'), [], null);
    wp_register_style("$styleName-image-overlay", additional_blocks_assets_url('/dist/image-overlay.css'), [], null);
    wp_register_style("$styleName-itrac", additional_blocks_assets_url('/dist/itrac.css'), [], null);
    wp_register_style("$styleName-map-control", additional_blocks_assets_url('/dist/map-control.css'), [], null);
    wp_register_style("$styleName-slider", additional_blocks_assets_url('/dist/slider.css'), [], null);
    wp_register_style("$styleName-team", additional_blocks_assets_url('/dist/team.css'), [], null);
    wp_register_style("$styleName-text-hover", additional_blocks_assets_url('/dist/text-hover.css'), [], null);

    /** Register custom JS */
    $scriptName = 'elementor-script-custom';
    wp_register_script("$scriptName-carousel", additional_blocks_assets_url('/dist/carousel.js'), [], null, ['in_footer' => true, 'strategy' => 'defer']);
    wp_register_script("$scriptName-gallery", additional_blocks_assets_url('/dist/gallery.js'), [], null, ['in_footer' => true, 'strategy' => 'defer']);
    wp_register_script("$scriptName-image-overlay", additional_blocks_assets_url('/dist/image-overlay.js'), [], null, ['in_footer' => true, 'strategy' => 'defer']);
    wp_register_script("$scriptName-itrac", additional_blocks_assets_url('/dist/itrac.js'), [], null, ['in_footer' => true, 'strategy' => 'defer']);
    wp_register_script("$scriptName-map-control", additional_blocks_assets_url('/dist/map-control.js'), [], null, ['in_footer' => true, 'strategy' => 'defer']);
    wp_register_script("$scriptName-slider", additional_blocks_assets_url('/dist/slider.js'), [], null, ['in_footer' => true, 'strategy' => 'defer']);
    wp_register_script("$scriptName-text-hover", additional_blocks_assets_url('/dist/text-hover.js'), [], null, ['in_footer' => true, 'strategy' => 'defer']);
});