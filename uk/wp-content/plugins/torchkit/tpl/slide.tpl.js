<section id="{{ id }}"
         data-title="{{ title }}"
         data-slide-type="{{ type }}"
         data-slide-src="{{ src }}"
>
    <div class="thumb">
        {{# if image }}
            <img src="{{ image }}" />
        {{/ if }}
        {{ title }}
    </div>

    <div class="content">
        {{# if content }}
            {{ content }}
        {{/ if }}
    </div>
</section>
