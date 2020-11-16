(function ($) {
    function pet_product_slider() {
        $('.pet-products-items-wrap').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
            dots: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        })
    }

    function pet_product_qty() {
        $('.pet-count-button.add').click(function () {
            var th = $(this).closest('.pet-count-wrap').find('.pet-count-input');
            th.val(+th.val() + 1);
        });
        $('.pet-count-button.sub').click(function () {
            var th = $(this).closest('.pet-count-wrap').find('.pet-count-input');
            if (th.val() > 1) th.val(+th.val() - 1);
        });
    }

    function pet_retail_block_slider() {
        var $slide_top = $('.pet-retail-product-slider-top');
        var $slide_bottom = $('.pet-retail-products-items-wrap');


        $slide_top.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
            dots: false,
            arrows: true,
            variableWidth: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });

        $slide_top.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var $sliders = $('.pet-retail-product-slider-bottom .pet-retail-products-items-wrap');
            var $current_slider = $sliders.eq(nextSlide);

            $sliders.removeClass('show');
            $current_slider.addClass('show');

            if ($current_slider.hasClass('slick-slider')) {
                $current_slider.slick('unslick');
            }
            $current_slider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                draggable: true,
                dots: false,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
        });

        $slide_bottom.eq(0).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    function open_category_filters() {
        $('.pet-filter-category').addClass('opened');

        $('.pet-filter-title').on('click', function () {
            let $this = $(this);
            let $parent = $this.parent('.pet-filter-category');

            $parent.toggleClass('opened');
        })

        if ($(window).width() <= 767) {
            $('.pet-filter-category').removeClass('opened');
        }
    }


    $(document).on('click', '.pet-category-sidebar-title', function() {
        let $this = $(this);
        let $parent = $this.closest('.pet-category-sidebar');

        $parent.toggleClass('opened');

        if ($parent.hasClass('opened')) {
            $(document).on('click.outside', function(e) {
                let $target = $(e.target);
                let parent_selector = '.' + $parent.attr('class').replace(' ', '.');

                if ($target.closest(parent_selector).length) {
                    // if close clicked
                } else {
                    $parent.removeClass('opened');
                    $(document).off('click.outside');
                }
            });
        } else {
            $(document).off('click.outside');
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            $('.pet-header-menu').addClass('fixed-header');
        }
        else {
            $('.pet-header-menu').removeClass('fixed-header');
        }
    });

    $(document).on('ready', function () {
        pet_product_slider();
        pet_product_qty();
        pet_retail_block_slider();
        open_category_filters();
        open_tabs_contents();

        var options = {
            zoomWidth: 500,
            offset: {vertical: 0, horizontal: 10}
        };
        new ImageZoom(document.getElementById("img-container"), options);
    });

    $(window).on('resize', function () {
        pet_product_slider();
        pet_retail_block_slider();
    });
})(jQuery);